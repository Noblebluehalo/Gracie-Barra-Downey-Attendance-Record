const path = require('node:path');
const cors = require('cors');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;
const databasePath = path.join(__dirname, 'jitsu.db');

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const database = new sqlite3.Database(databasePath, (error) => {
  if (error) {
    console.error('Failed to open SQLite database:', error.message);
    process.exitCode = 1;
    return;
  }

  app.listen(port, () => {
    console.log(`Backend API listening on port ${port}`);
  });
});

process.on('SIGINT', () => {
  database.close((error) => {
    if (error) {
      console.error('Failed to close SQLite database:', error.message);
      process.exitCode = 1;
    }
    process.exit();
  });
});
