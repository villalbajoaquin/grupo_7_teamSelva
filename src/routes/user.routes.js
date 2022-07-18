const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

// routes
    // register (GET)
    userRoutes.get('/register', userController. register_createA);

    // register (POST)
    userRoutes.post('/register', userController.register_createB);

    // login
    userRoutes.get('/login', userController.login);

    // login POST
    userRoutes.post('/login', userController.login);

module.exports = userRoutes;