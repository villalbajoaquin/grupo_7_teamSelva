const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController");
const path = require('path');

// multer config
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_pdt_${path.extname(file.originalname)}`);
    }
});
const uploads = multer({ storage });

// routes
    // product list
    productRoutes.get('/', productController.product_list); // Sprint 4

    // product cart
    productRoutes.get('/product_cart', productController.product_cart);
    
    // product create (GET)
    productRoutes.get('/product_create', productController.product_create);
    
    // product edit (GET)
    productRoutes.get('/product_edit', productController.product_edit);

    // search
    productRoutes.get('/search', productController.product_search);
    
    // product delete (DELETE)
    productRoutes.delete('/:id', productController.product_delete);

    // product detail
    productRoutes.get('/:id', productController.product_detail);

module.exports = productRoutes;