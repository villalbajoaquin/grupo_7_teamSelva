const express = require('express');
const path = require('path');
const routes = require('./src/routes/index.routes');
const app = express();

// port & server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// urlencoded
app.use(express.urlencoded({ extended: false }));

// static
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', routes);