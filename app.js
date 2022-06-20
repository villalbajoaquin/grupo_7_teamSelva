const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const methodOverride = require('method-override');

// port & server
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// static
app.use(express.static(path.join(__dirname, 'public')));

// _method
app.use(methodOverride('_method'));


// routes
app.use('/', require('./src/routes/index.routes'));

// HTTP methods & json
    // json
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // 404
    app.use((req, res, next) => {
        res.status(404).render('not-found');
    });