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
    // index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

    // product detail
app.get('/product_detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productDetail.html'));
});

    // product cart
app.get('/product_cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productCart.html'));
});

    // register
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

    // login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

/* Hola */