const express = require("express");
const productController = require("../../controllers/api/productController");
const productRoutes = express.Router();

// routes
    // product list
    productRoutes.get('/', productController.list);

    // product detail
    //productRoutes.get('/:id', productController.product_detail);

module.exports = productRoutes;