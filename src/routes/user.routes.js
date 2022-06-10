const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

// routes
    // register
    userRoutes.get('/register', userController.register);

    // login
    userRoutes.get('/login', userController.login);

module.exports = userRoutes;