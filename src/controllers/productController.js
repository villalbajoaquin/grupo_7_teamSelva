const path = require("path");

const productController = {
    product_detail: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/products/productDetail.html"));
    },
    product_cart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/products/productCart.html"));
    }
};

module.exports = productController; 