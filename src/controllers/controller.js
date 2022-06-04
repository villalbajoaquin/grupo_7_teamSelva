const path = require("path");

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    product_detail: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/products/productDetail.html"));
    },
    product_cart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/products/productCart.html"));
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/users/register.html"));
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/users/login.html"));
    },
};

module.exports = controller; 