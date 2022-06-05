const express = require("express");
const mainRoutes = express.Router();
const mainController = require("../controllers/mainController");

// routes
    // index
    mainRoutes.get('/', mainController.index);

module.exports = mainRoutes;