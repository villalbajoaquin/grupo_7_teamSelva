const express = require("express");
const routes = express.Router();

// routes
    // main
    routes.use("/", require("./main.routes"));

    // products
    routes.use("/product", require("./product.routes"));

    // user
    routes.use("/user", require("./user.routes"));

    // api
    routes.use("/api", require("./api/api.routes"));

module.exports = routes;