import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Validate API key early
if (!process.env.OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY is not set. /api/chat requests will fail until you set it.');
}

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Middleware
app.use(cors());
app.use(express.json());

// Simple logger (optional)
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Test endpoint
app.get('/api/test', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'API is working' });
});

// Contact endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  console.log('New contact form submission:', { name, email, subject, message });
  return res.status(200).json({ success: true, message: 'Message received' });
});

// Helper to normalize incoming messages
type IncomingMessage = {
  role: string;
  content?: string;
  message?: string;
};

function normalizeMessages(raw: any[]): { role: 'system' | 'user' | 'assistant'; content: string }[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((m: IncomingMessage) => {
    const rawRole = (m.role || '').toLowerCase();
    let role: 'system' | 'user' | 'assistant' = 'user';
    if (rawRole === 'system') role = 'system';
    else if (rawRole === 'assistant' || rawRole === 'bot') role = 'assistant';
    else role = 'user';

    const content = (m.content ?? m.message ?? '').toString();
    return { role, content };
  }).filter(m => m.content.trim().length > 0);
}

// Chat endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not configured');
      return res.status(500).json({ error: 'OpenAI API key is not configured' });
    }

    const { messages } = req.body || {};
    if (!messages || !Array.isArray(messages)) {
      console.error('Invalid messages payload:', messages);
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const normalized = normalizeMessages(messages);
    if (normalized.length === 0) {
      return res.status(400).json({ error: 'Messages array must contain at least one non-empty message' });
    }

    console.log('Chat request messages (normalized):', normalized.slice(0, 5));

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: normalized,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices?.[0]?.message?.content ?? "I'm not sure how to respond.";
    console.log('Chat response generated');
    return res.json({ reply });

  } catch (error: any) {
    console.error('OpenAI error:', {
      name: error?.name,
      message: error?.message,
      responseStatus: error?.response?.status,
      responseData: error?.response?.data,
    });

    const status = error?.response?.status;
    if (status === 401) {
      return res.status(500).json({ error: 'Invalid API key configuration. Please check your OpenAI API key.' });
    }
    if (status === 429) {
      return res.status(500).json({ error: 'Rate limit exceeded. Please try again later.' });
    }

    const errorMessage = error?.response?.data?.error?.message || error?.message || 'Unknown error occurred';
    return res.status(500).json({
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? { stack: error?.stack } : undefined,
    });
  }
});

// Global error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

server.on('error', (error: any) => {
  if (error && error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try a different port.`);
    process.exit(1);
  }
  console.error('Server error:', error);
});
