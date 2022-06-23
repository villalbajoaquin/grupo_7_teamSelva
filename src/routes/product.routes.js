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
    productRoutes.get('/product_create', productController.product_createA);

    // product create (POST)
    productRoutes.post('/product_create', upload.single("imgsrc"), productController.product_createB);

    // product edit (GET)
    productRoutes.get('/product_edit/:id', productController.product_editA);
    
    // product edit (PUT)
    productRoutes.put("/product_list/:id", upload.single("imgsrc"), productController.product_editB)

    // product search
    productRoutes.get('/search', productController.product_search); // Sprint 4

    // product time filters
        // 24h
        productRoutes.get('/twenty-four', productController.twenty_four);

        // 7d
        productRoutes.get('/seven', productController.seven);

        // 30d
        productRoutes.get('/thirty', productController.thirty);
    
    // product delete (DELETE)
    productRoutes.delete('/:id', productController.product_delete); // Sprint 4

    // product detail
    productRoutes.get('/:id', productController.product_detail); // Sprint 4

module.exports = productRoutes;