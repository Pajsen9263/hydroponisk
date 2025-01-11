// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve an HTML file from the views directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/fordelar', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'fordelar.html'));
});
app.get('/nackdelar', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'nackdelar.html'));
});
app.get('/tekniker', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'tekniker.html'));
});
app.get('/kallor', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'kallor.html'));
});
app.get('/historia', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'historia.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
