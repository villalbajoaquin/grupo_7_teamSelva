const path = require("path");

const productController = {
    product_detail: (req, res) => {
        res.render('products/productDetail');
    },
    product_cart: (req, res) => {
        res.render('products/productCart');
    },
    product_create: (req, res) => {
        res.render('products/productCreate');
    },
    product_edit: (req, res) => {
        res.render('products/productEdit');
    },
};

module.exports = productController; 