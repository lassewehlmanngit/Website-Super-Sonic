import express from 'express';
import keystaticConfig from './keystatic.config';
import { createReader } from '@keystatic/core/reader';
import path from 'path';
import { fileURLToPath } from 'url';
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
