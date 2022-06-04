const express = require ("express");
const routes = express.Router();
const controller = require ("../controllers/controller");

// routes
    // index
    routes.get('/', controller.index);
    
        // product detail
    routes.get('/product_detail', controller.product_detail);
    
        // product cart
    routes.get('/product_cart', controller.product_cart);
    
        // register
    routes.get('/register', controller.register);
    
        // login
    routes.get('/login', controller.login);

module.exports = routes;