import express from 'express';
import keystaticConfig from './keystatic.config';
import { createReader } from '@keystatic/core/reader';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS headers
app.use(cors({
  origin: '*', // In production, you might want to restrict this to your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});

// API Endpoint to Send Emails
app.post('/api/send-email', async (req, res) => {
  const { type, data, lang } = req.body;

  try {
    // 1. Email to Business Owner (You)
    const ownerMailOptions = {
      from: process.env.EMAIL_FROM || '"Norddorf Website" <noreply@norddorf.com>',
      to: process.env.EMAIL_TO, // Your email address
      subject: `New Lead: ${type} - ${data.name}`,
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.currentWebsite ? `<p><strong>Website:</strong> ${data.currentWebsite}</p>` : ''}
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        
        <h3>Details:</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `,
    };

    await transporter.sendMail(ownerMailOptions);

    // 2. Confirmation Email to User
    const userSubject = lang === 'de' 
      ? 'Deine Anfrage bei Norddorf' 
      : lang === 'ja' 
      ? 'お問い合わせありがとうございます' 
      : 'Your request at Norddorf';

    const userMessage = lang === 'de'
      ? `<p>Hallo ${data.name},</p><p>Danke für deine Anfrage. Wir haben deine Daten erhalten und melden uns in Kürze.</p>`
      : lang === 'ja'
      ? `<p>${data.name} 様</p><p>お問い合わせありがとうございます。内容を確認し、担当者よりご連絡いたします。</p>`
      : `<p>Hi ${data.name},</p><p>Thanks for your request. We have received your details and will get back to you shortly.</p>`;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"Norddorf" <hello@norddorf.com>',
      to: data.email,
      subject: userSubject,
      html: userMessage,
    });

    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'keystatic-api' });
});

// Create reader for Keystatic
const reader = createReader(path.join(__dirname, '..'), keystaticConfig);

// Basic API endpoints for Keystatic
app.get('/api/keystatic/config', async (req, res) => {
  try {
    res.json({
      collections: Object.keys(keystaticConfig.collections || {}),
      storage: keystaticConfig.storage.kind,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load config' });
  }
});

// Note: Keystatic's full API requires React Server Components
// For a standalone Express server, you would need to implement
// the full API routes manually. This is a simplified version.
app.get('/api/keystatic/*', (req, res) => {
  res.status(501).json({ 
    error: 'Keystatic API requires React Server Components',
    message: 'For full functionality, use Keystatic with Next.js or Astro, or use the CLI tools for content management.',
    alternatives: [
      'Use Keystatic CLI for local content management',
      'Edit content directly in GitHub (if using GitHub storage)',
      'Consider migrating to Next.js or Astro for full Keystatic support'
    ]
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Keystatic API server running on port ${PORT}`);
  console.log(`📝 Note: Full Keystatic admin UI requires React Server Components`);
  console.log(`💡 Use Keystatic CLI or GitHub for content management`);
});
