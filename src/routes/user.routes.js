const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const {check} = require('express-validator');
const validations = require("../middlewares/usersMid");

// routes
    // register (GET)
    userRoutes.get('/register', userController.registerView);

    // register (POST)
    userRoutes.post('/register', validations.register, userController.register);

    // login
    userRoutes.get('/login', userController.login);

    // login POST
    userRoutes.post('/login', validations.validationsLogin,userController.loginProcess);

module.exports = userRoutes;