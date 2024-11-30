const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '../../data');

// Ensure data directory exists
const initStorage = async () => {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
};

// Generic file operations
const readJsonFile = async (filename) => {
  try {
    const data = await fs.readFile(path.join(DATA_DIR, filename));
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
};

const writeJsonFile = async (filename, data) => {
  await fs.writeFile(
    path.join(DATA_DIR, filename),
    JSON.stringify(data, null, 2)
  );
};

// Sessions operations
const getSessions = async () => {
  const data = await readJsonFile('sessions.json');
  return data || [];
};

const saveSession = async (session) => {
  const sessions = await getSessions();
  const index = sessions.findIndex(s => s.id === session.id);
  
  if (index >= 0) {
    sessions[index] = session;
  } else {
    sessions.push(session);
  }
  
  await writeJsonFile('sessions.json', sessions);
  return session;
};

const deleteSession = async (sessionId) => {
  const sessions = await getSessions();
  const filtered = sessions.filter(s => s.id !== sessionId);
  await writeJsonFile('sessions.json', filtered);
};

// Messages operations
const getMessages = async (sessionId) => {
  const data = await readJsonFile(`messages_${sessionId}.json`);
  return data || [];
};

const saveMessage = async (sessionId, message) => {
  const messages = await getMessages(sessionId);
  messages.push(message);
  await writeJsonFile(`messages_${sessionId}.json`, messages);
  return message;
};

// Initialize storage on module load
initStorage();

module.exports = {
  getSessions,
  saveSession,
  deleteSession,
  getMessages,
  saveMessage
};
