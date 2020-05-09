
'use strict';

const express = require('express');
const path = require('path');

// Settings
const PORT = 3000;
const HOST = '0.0.0.0';

// HTML Directory of statuc resources ./html
const htmlDirectory = path.join(__dirname, 'html');

// Server config
const app = express();

// Host static resources for the root files
app.use('/', express.static(htmlDirectory));

// ./api - Host server api requests for the server
app.get('/api', (req, res) => {
  res.send('./api works. Try <a href="/api/getMessage">/api/getMessage</a>');
});

// ./api/getMessage - Endpoint to serve some json
app.get('/api/getMessage', (req, res) => {
  res.json({ message: 'The board is green!' });
});

app.listen(PORT, HOST);

// Debugging
console.log(`HTML directory is ${htmlDirectory}`);
console.log(`Express is running on http://${HOST}:${PORT}`);
