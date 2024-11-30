const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const fileStorage = require('./database/fileStorage');

const app = express();
app.use(express.json());

const sessions = new Map();

// Create WhatsApp client
const createWhatsAppClient = async (sessionId) => {
  const client = new Client({
    authStrategy: new LocalAuth({ clientId: sessionId }),
    puppeteer: {
      args: ['--no-sandbox']
    }
  });

  client.on('qr', async (qr) => {
    const session = await fileStorage.saveSession({
      id: sessionId,
      qr: await qrcode.toDataURL(qr),
      status: 'disconnected'
    });
  });

  client.on('ready', async () => {
    await fileStorage.saveSession({
      id: sessionId,
      status: 'connected'
    });
  });

  client.on('message', async msg => {
    await fileStorage.saveMessage(sessionId, {
      from: msg.from,
      body: msg.body,
      timestamp: msg.timestamp
    });
  });

  await client.initialize();
  sessions.set(sessionId, client);
  
  return client;
};

// Routes
app.post('/session/start', async (req, res) => {
  const { sessionId } = req.body;
  
  if (!sessionId) {
    return res.status(400).json({ error: 'Session ID is required' });
  }

  try {
    const client = await createWhatsAppClient(sessionId);
    res.json({ status: 'initializing' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/session/:sessionId/status', async (req, res) => {
  const { sessionId } = req.params;
  const sessions = await fileStorage.getSessions();
  const session = sessions.find(s => s.id === sessionId);
  
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  res.json(session);
});

app.post('/session/:sessionId/send', async (req, res) => {
  const { sessionId } = req.params;
  const { number, message } = req.body;
  
  const client = sessions.get(sessionId);
  if (!client) {
    return res.status(404).json({ error: 'Session not found' });
  }

  try {
    const msg = await client.sendMessage(`${number}@c.us`, message);
    await fileStorage.saveMessage(sessionId, {
      to: number,
      body: message,
      timestamp: Date.now()
    });
    
    res.json({ status: 'sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/session/:sessionId/messages', async (req, res) => {
  const { sessionId } = req.params;
  const messages = await fileStorage.getMessages(sessionId);
  res.json(messages);
});

app.delete('/session/:sessionId', async (req, res) => {
  const { sessionId } = req.params;
  
  const client = sessions.get(sessionId);
  if (client) {
    await client.destroy();
    sessions.delete(sessionId);
  }
  
  await fileStorage.deleteSession(sessionId);
  res.json({ status: 'deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
