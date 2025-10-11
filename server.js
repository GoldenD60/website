const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from Vite's dist folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/youtube', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'youtube.html'));
});

app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'music.html'));
});

app.get('/minecraft', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'minecraft.html'));
});

app.get('/programming', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'programming.html'));
});

const options = {
  key: fs.readFileSync('C:/certs/goldend60.net.key'),
  cert: fs.readFileSync('C:/certs/goldend60.net.pem')
};

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS running on port 443 via Cloudflare Origin Certificate');
});
