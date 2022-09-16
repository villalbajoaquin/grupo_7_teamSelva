const express = require("express");
const routes = express.Router();

// routes

    // products
    routes.use("/products", require("./product.routes"));

    // user
    routes.use("/users", require("./user.routes"));

module.exports = routes;