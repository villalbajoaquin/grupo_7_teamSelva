const express = require('express');
const path = require('path');
const app = express();

// port & server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// urlencoded
app.use(express.urlencoded({ extended: false }));

// static
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', require('./src/routes/index.routes'));