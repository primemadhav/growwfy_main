import { Resend } from 'resend';

type ContactInput = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

type ContactRequest = {
  body: unknown;
  forwardedFor?: string | string[];
  remoteAddress?: string;
  userAgent?: string;
};

type ContactResponse = {
  status: number;
  body: { success: boolean; error?: string; message?: string };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value: unknown, maxLength: number) => {
  if (typeof value !== 'string') return null;
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, ' ').trim();
  return cleaned && cleaned.length <= maxLength ? cleaned : null;
};

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character] as string);

export const sendContactMessage = async ({ body, forwardedFor, remoteAddress, userAgent }: ContactRequest): Promise<ContactResponse> => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { status: 400, body: { success: false, error: 'Invalid request body.' } };
  }

  const { name: rawName, email: rawEmail, subject: rawSubject, message: rawMessage } = body as ContactInput;
  const name = cleanText(rawName, 100);
  const email = cleanText(rawEmail, 254)?.toLowerCase();
  const subject = rawSubject === undefined ? 'Not provided' : cleanText(rawSubject, 200);
  const message = cleanText(rawMessage, 5_000);

  if (!name || !email || !EMAIL_PATTERN.test(email) || !subject || !message) {
    return { status: 400, body: { success: false, error: 'Please provide a valid name, email, subject, and message.' } };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error('[Contact] Missing required Resend configuration.');
    return { status: 500, body: { success: false, error: 'Contact service is temporarily unavailable.' } };
  }

  const submittedAt = new Date().toISOString();
  const forwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(',')[0];
  const ip = (forwardedIp?.trim() || remoteAddress || 'Unavailable').slice(0, 128);
  const safeUserAgent = (userAgent || 'Unavailable').slice(0, 1_000);
  const text = [
    'New website inquiry', '', `Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, 'Message:', message, '',
    `Submitted: ${submittedAt}`, `IP address: ${ip}`, `User-Agent: ${safeUserAgent}`,
  ].join('\n');
  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}<br />
    <strong>Email:</strong> ${escapeHtml(email)}<br />
    <strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    <hr />
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}<br />
    <strong>IP address:</strong> ${escapeHtml(ip)}<br />
    <strong>User-Agent:</strong> ${escapeHtml(safeUserAgent)}</p>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({ from, to: [to], replyTo: email, subject: `New Website Inquiry — ${name}`, text, html });

    if (error) {
      console.error('[Contact] Resend rejected email:', error.name, error.message);
      return { status: 502, body: { success: false, error: 'Unable to send your message right now. Please try again.' } };
    }

    return { status: 200, body: { success: true, message: 'Message sent successfully!' } };
  } catch (error) {
    console.error('[Contact] Resend request failed:', error instanceof Error ? error.message : 'Unknown error');
    return { status: 502, body: { success: false, error: 'Unable to send your message right now. Please try again.' } };
  }
};
