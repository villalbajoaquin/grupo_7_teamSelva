const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const methodOverride = require('method-override');
const session = require('express-session');

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

// json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/', require('./src/routes/index.routes'));

// session

app.use(session({secret: 'secret'}));  

// HTTP methods & json

    // 404
    app.use((req, res, next) => {
        res.status(404).render('not-found');
    });