/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import 'dotenv/config';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '16kb' }));

// Resolve paths for ES Modules and CommonJS safely
const __filename = typeof import.meta !== 'undefined' && import.meta.url
  ? fileURLToPath(import.meta.url)
  : '';
const __dirname = __filename ? path.dirname(__filename) : process.cwd();
const dbPath = path.join(process.cwd(), 'db.json');

// Initialize local database JSON if not exists
const initializeDb = () => {
  if (!fs.existsSync(dbPath)) {
    const initialData = {
      user: {
        id: 'usr_984572948',
        name: 'Madhav',
        email: 'userismadhav@gmail.com',
        companyName: "Madhav's Agency",
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
        activePlan: 'none',
        subscriptionStatus: 'none',
        billingCycle: 'monthly',
        createdAt: new Date().toISOString(),
        notifications: {
          marketing: false,
          projectUpdates: true,
          billing: true,
        },
      },
      transactions: [],
      milestones: [
        {
          id: 'm1',
          title: 'Strategic Onboarding',
          description: 'Establish branding, site requirements, and SEO search volume analysis.',
          status: 'completed',
          updatedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 'm2',
          title: 'Design Concepts & SEO Structure',
          description: 'Draft the visual UI styleboard, layout designs, and URL architecture map.',
          status: 'in_progress',
          updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 'm3',
          title: 'Custom Development & Engineering',
          description: 'High-performance React/Vite clean-code frontend construction.',
          status: 'upcoming',
          updatedAt: new Date().toISOString(),
        },
        {
          id: 'm4',
          title: 'Meta Tags & Copy Tuning',
          description: 'Deep SEO copywriting, structured JSON-LD schema, and speed tuning.',
          status: 'upcoming',
          updatedAt: new Date().toISOString(),
        },
        {
          id: 'm5',
          title: 'Launch & Analytics Hookup',
          description: 'Secure SSL deployment, Google Search Console index request, and analytics setups.',
          status: 'upcoming',
          updatedAt: new Date().toISOString(),
        }
      ],
      messages: [
        {
          id: 'msg_1',
          name: 'Sarah Jenkins',
          email: 'sarah@designcollective.io',
          phone: '+91 8595055802',
          subject: 'E-commerce Redesign Inquiry',
          message: 'Hello, we are looking for a complete overhaul of our web presence with custom-tailored SEO structures. We loved the aesthetic of Growwfy.com and wanted to know your timeline for a full custom shop platform. Looking forward to speaking!',
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          status: 'unread',
        }
      ],
    };
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), 'utf-8');
  }
};

initializeDb();

// Helper to read database
const readDb = () => {
  try {
    const raw = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading DB:', error);
    return null;
  }
};

// Helper to write database
const writeDb = (data: any) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing DB:', error);
    return false;
  }
};

// --- API ROUTES ---

// 0. Robots, Sitemap and LLMs SEO Routes
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /

Sitemap: https://growwfy.com/sitemap.xml`);
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://growwfy.com/</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://growwfy.com/website-dev</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://growwfy.com/seo</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://growwfy.com/paid-advertising</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://growwfy.com/ecommerce</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://growwfy.com/consulting</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://growwfy.com/industries</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://growwfy.com/pricing</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://growwfy.com/about</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://growwfy.com/blog</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://growwfy.com/careers</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://growwfy.com/contact</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://growwfy.com/privacy-policy</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;
  res.send(sitemapXml);
});

app.get('/llms.txt', (req, res) => {
  res.type('text/plain');
  try {
    const content = fs.readFileSync(path.join(process.cwd(), 'llms.txt'), 'utf-8');
    res.send(content);
  } catch (err) {
    res.status(404).send('Not Found');
  }
});

app.get('/llms-full.txt', (req, res) => {
  res.type('text/plain');
  try {
    const content = fs.readFileSync(path.join(process.cwd(), 'llms-full.txt'), 'utf-8');
    res.send(content);
  } catch (err) {
    res.status(404).send('Not Found');
  }
});

// 0.5. Meta Conversions API (CAPI) Proxy Route
app.post('/api/tracking/meta-capi', async (req, res) => {
  const { pixelId, eventName, eventId, eventUrl, userAgent, customData } = req.body;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId) {
    return res.status(400).json({ error: 'Missing pixelId' });
  }

  // Generate real client ip if behind proxy
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '';

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        user_data: {
          client_ip_address: clientIp.split(',')[0].trim(),
          client_user_agent: userAgent || req.headers['user-agent'] || '',
        },
        custom_data: customData || {},
        action_source: 'website',
        event_source_url: eventUrl || 'https://growwfy.com',
      }
    ]
  };

  if (!accessToken) {
    // Graceful simulation mode for development/previews
    return res.json({
      status: 'simulated',
      message: 'Meta Conversions API simulation active. Set META_CAPI_ACCESS_TOKEN env variable to enable live synchronization.',
      eventId: eventId,
      sentPayload: payload,
    });
  }

  try {
    const url = `https://graph.facebook.com/v17.0/${pixelId}/events?access_token=${accessToken}`;
    const fbResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await fbResponse.json();
    if (!fbResponse.ok) {
      console.warn('[Meta CAPI Error Response]', result);
      return res.status(fbResponse.status).json({
        error: 'Facebook CAPI endpoint rejected payload',
        details: result,
      });
    }

    res.json({
      status: 'succeeded',
      eventId: eventId,
      fbResult: result,
    });
  } catch (error: any) {
    console.error('[Meta CAPI Server Exception]', error);
    res.status(500).json({
      error: 'Failed to dispatch Meta CAPI event',
      message: error.message,
    });
  }
});

// 1. GET Dashboard State
app.get('/api/dashboard', (req, res) => {
  const db = readDb();
  if (!db) {
    return res.status(500).json({ error: 'Database read error' });
  }
  res.json({
    user: db.user,
    transactions: db.transactions,
    milestones: db.milestones,
    messages: db.messages, // Serve all data dynamically
  });
});

// 2. PUT Profile Info
app.put('/api/profile', (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database error' });

  const { name, email, companyName, notifications } = req.body;

  if (name) db.user.name = name;
  if (email) db.user.email = email;
  if (companyName) db.user.companyName = companyName;
  if (notifications) db.user.notifications = notifications;

  writeDb(db);
  res.json({ message: 'Profile updated successfully', user: db.user });
});

// 3. POST Contact Message
type ContactInput = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
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

const getClientIp = (req: express.Request) => {
  const forwardedFor = req.headers['x-forwarded-for'];
  const forwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(',')[0];
  return (forwardedIp?.trim() || req.socket.remoteAddress || 'Unavailable').slice(0, 128);
};

app.post('/api/contact', async (req, res) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({ success: false, error: 'Invalid request body.' });
  }

  const { name: rawName, email: rawEmail, subject: rawSubject, message: rawMessage } = req.body as ContactInput;
  const name = cleanText(rawName, 100);
  const email = cleanText(rawEmail, 254)?.toLowerCase();
  const subject = rawSubject === undefined ? 'Not provided' : cleanText(rawSubject, 200);
  const message = cleanText(rawMessage, 5_000);

  if (!name || !email || !EMAIL_PATTERN.test(email) || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Please provide a valid name, email, subject, and message.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error('[Contact] Missing required Resend configuration.');
    return res.status(500).json({ success: false, error: 'Contact service is temporarily unavailable.' });
  }

  const submittedAt = new Date().toISOString();
  const ip = getClientIp(req);
  const userAgent = (req.get('user-agent') || 'Unavailable').slice(0, 1_000);
  const text = [
    'New website inquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Message:`,
    message,
    '',
    `Submitted: ${submittedAt}`,
    `IP address: ${ip}`,
    `User-Agent: ${userAgent}`,
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
    <strong>User-Agent:</strong> ${escapeHtml(userAgent)}</p>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Website Inquiry — ${name}`,
      text,
      html,
    });

    if (error) {
      console.error('[Contact] Resend rejected email:', error.name, error.message);
      return res.status(502).json({ success: false, error: 'Unable to send your message right now. Please try again.' });
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('[Contact] Resend request failed:', error instanceof Error ? error.message : 'Unknown error');
    return res.status(502).json({ success: false, error: 'Unable to send your message right now. Please try again.' });
  }
});

app.all('/api/contact', (req, res) => {
  res.set('Allow', 'POST');
  return res.status(405).json({ success: false, error: 'Method not allowed.' });
});

// 4. POST Checkout / Subscribe Simulation
app.post('/api/checkout', (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database error' });

  const { planId, cardName, cardNumber, billingCycle, paymentType, transactionId, customerPhone, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = req.body;

  if (!planId || !cardName) {
    return res.status(400).json({ error: 'Missing required checkout information.' });
  }

  // Validate plan
  const planCosts = {
    starter: 19900,
    professional: 69900,
    business: 119900,
  };

  const validPlans = ['starter', 'professional', 'business'];
  if (!validPlans.includes(planId)) {
    return res.status(400).json({ error: 'Invalid subscription plan.' });
  }

  const cost = planCosts[planId as keyof typeof planCosts];
  const finalAmount = billingCycle === 'annually' ? cost * 12 * 0.8 : cost; // 20% off for annual

  // Determine payment method label
  let displayPaymentMethod = '';
  if (paymentType === 'upi') {
    displayPaymentMethod = `UPI Pay (Ref: ${transactionId || 'N/A'})`;
  } else if (paymentType === 'phone_transfer') {
    displayPaymentMethod = `Phone Transfer to 8595055802 (From: ${customerPhone || 'N/A'})`;
  } else {
    displayPaymentMethod = `Card ending in ${cardNumber ? cardNumber.slice(-4) : '4242'}`;
  }

  // Create transactions
  const newTransaction = {
    id: `tx_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    date: new Date().toISOString(),
    planId: planId,
    amount: finalAmount,
    status: 'succeeded' as const,
    paymentMethod: displayPaymentMethod,
    invoiceUrl: '#',
    utm: {
      source: utm_source || '',
      medium: utm_medium || '',
      campaign: utm_campaign || '',
      content: utm_content || '',
      term: utm_term || ''
    }
  };

  // Update user profile active plan
  db.user.activePlan = planId;
  db.user.subscriptionStatus = 'active';
  db.user.billingCycle = billingCycle || 'monthly';

  // Stagger / customize the project milestones to match the new purchase plan
  db.milestones = [
    {
      id: 'm1',
      title: `${planId.toUpperCase()} Strategy Kickoff`,
      description: `Establish campaign goals, keyword audits, and visual benchmarks targeted at the ${planId} tier.`,
      status: 'completed',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'm2',
      title: 'UI Design & Content Frame',
      description: `Creating custom designs following the Growwfy.com aesthetic.`,
      status: 'in_progress',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'm3',
      title: 'Full Stack Frontend Engineering',
      description: 'Building custom React and Tailwind code, optimized for lightning-fast loads.',
      status: 'upcoming',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'm4',
      title: 'SEO Tag & Copy Tuning',
      description: 'Reviewing meta keywords, structured data injection, and speed audits.',
      status: 'upcoming',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'm5',
      title: 'Launch Event & Handover',
      description: 'Live domain hookup, SEO tracking configuration, and client access onboarding.',
      status: 'upcoming',
      updatedAt: new Date().toISOString(),
    }
  ];

  db.transactions.unshift(newTransaction);
  writeDb(db);

  console.log('[Growwfy Server] Purchase Created from Campaign:', newTransaction.utm);

  res.json({
    success: true,
    message: `Subscription to ${planId.toUpperCase()} activated successfully!`,
    user: db.user,
    transaction: newTransaction,
  });
});

// 5. POST Cancel Subscription
app.post('/api/cancel', (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database error' });

  db.user.activePlan = 'none';
  db.user.subscriptionStatus = 'none';
  
  writeDb(db);
  res.json({ success: true, message: 'Subscription canceled successfully', user: db.user });
});

// --- VITE MIDDLEWARE SETUP ---
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express custom server running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
