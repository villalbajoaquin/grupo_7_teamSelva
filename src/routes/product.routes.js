const express = require("express");
const productController = require("../controllers/productController");
const upload = require('../middlewares/multerMid'); // multer config
const productRoutes = express.Router();

// routes
    // product list
    productRoutes.get('/', productController.product_list); // Sprint 4

    // product cart
    productRoutes.get('/product_cart', productController.product_cart);
    
    // product create (GET)
    productRoutes.get('/product_create', productController.product_create);
  
    //PRODUCT EDIT

    // product edit (GET)
productRoutes.get('/product_edit/:id', productController.product_editA);
    
    // product edit (PUT)
productRoutes.put("product_edit/:id", productController.product_editB)

    // product search
    productRoutes.get('/search', productController.product_search); // Sprint 4
    
    // product delete (DELETE)
    productRoutes.delete('/:id', productController.product_delete); // Sprint 4

    // product detail
    productRoutes.get('/:id', productController.product_detail); // Sprint 4

module.exports = productRoutes;