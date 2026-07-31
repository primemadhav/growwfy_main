import { sendContactMessage } from '../lib/contact.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const result = await sendContactMessage({
    body: req.body,
    forwardedFor: req.headers['x-forwarded-for'],
    remoteAddress: req.socket?.remoteAddress,
    userAgent: req.headers['user-agent'],
  });

  return res.status(result.status).json(result.body);
}
