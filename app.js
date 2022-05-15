const express = require('express');
const path = require('path');
const app = express();

// port & server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// static
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});