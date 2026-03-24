const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Root route
app.get('/', (req, res) => {
  res.send('Iron Pulse Gym Backend API');
});

const PORT = 5000;

// Force console output
console.log = function(msg) {
  process.stdout.write(msg + '\n');
};

const server = app.listen(PORT, () => {
  console.log('✅ Server is running!');
  console.log(`📡 Port: ${PORT}`);
  console.log(`🔗 Test URL: http://localhost:${PORT}/api/test`);
});

// Keep process alive
process.on('SIGINT', () => {
  server.close();
  process.exit();
});