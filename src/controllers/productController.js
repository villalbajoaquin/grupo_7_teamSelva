const path = require("path");

const productController = {
    product_detail: (req, res) => {
        res.render('products/productDetail');
    },
    product_cart: (req, res) => {
        res.render('products/productCart');
    }
};

module.exports = productController; 