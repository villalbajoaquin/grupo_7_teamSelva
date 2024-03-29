const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const methodOverride = require('method-override');
const session = require('express-session');
const cookie = require('cookie-parser');


// port & server
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// cors (for APIs)
app.use(cors());

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

// session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));  

// routes
app.use('/', require('./src/routes/index.routes'));


// cookies
app.use(cookie());

// HTTP methods & json

    // 404
    app.use((req, res, next) => {
        res.status(404).render('not-found');
        });