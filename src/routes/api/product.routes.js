const express = require("express");
const productController = require("../../controllers/api/productController");
const productRoutes = express.Router();

// routes
    // product list
    productRoutes.get('/', productController.list);

    // last added to bbdd
    productRoutes.get('/last-added', productController.last_added);

    // next show
    productRoutes.get('/next-show', productController.next_show);

    // product detail
    productRoutes.get('/:id', productController.detail);

module.exports = productRoutes;