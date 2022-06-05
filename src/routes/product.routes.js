const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController");

// routes
    // product detail
    productRoutes.get('/product_detail', productController.product_detail);

    // product cart
    productRoutes.get('/product_cart', productController.product_cart);

module.exports = productRoutes;