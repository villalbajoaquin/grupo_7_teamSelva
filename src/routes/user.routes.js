const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

// routes
    // register
    userRoutes.get('/register', userController.register);

    // register POST
    userRoutes.post('/register', userController.register);

    // login
    userRoutes.get('/login', userController.login);

    // login POST
    userRoutes.post('/login', userController.login);

module.exports = userRoutes;