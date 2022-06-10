const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController");

// routes
    // product detail
    productRoutes.get('/product_detail', productController.product_detail);

    // product cart
    productRoutes.get('/product_cart', productController.product_cart);
    
    // product create
    productRoutes.get('/product_create', productController.product_create);
    
    // product edit
    productRoutes.get('/product_edit', productController.product_edit);

module.exports = productRoutes;