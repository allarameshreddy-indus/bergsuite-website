import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test database connection
app.get('/api/test-connection', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() as current_time');
    client.release();
    
    res.json({
      success: true,
      message: 'Database connected successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

const inquiries = [];

app.post('/api/inquiries', (req, res) => {
  const body = req.body ?? {};
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailOk || message.length < 20) {
    res.status(400).json({
      success: false,
      message: "Name, a valid email, and a message of at least 20 characters are required.",
    });
    return;
  }

  const record = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    ...body,
    name,
    email,
    message,
  };
  inquiries.push(record);
  console.log(`Inquiry ${record.id} (${body.intent || "general"})`);
  res.status(201).json({ success: true, id: record.id });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 