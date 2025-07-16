import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from frontend
app.use(bodyParser.json());

// Route to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // For now, just log it to the console
  console.log('New contact form submission:', req.body);

  // In real app: save to DB or send email here

  res.status(200).json({ success: true, message: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
