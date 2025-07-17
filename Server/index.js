const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const groqResponse = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: 'You are a friendly hair care consultant named HairCoBot. Answer hair-related questions clearly, warmly, and helpfully.',
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        },
      }
    );

    const reply = groqResponse.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Groq error:', error.response?.data || error.message);
    res.status(500).send('Something went wrong');
  }
});

app.listen(5000, () => {
  console.log(' Groq-powered AI server running on http://localhost:5000');
});
