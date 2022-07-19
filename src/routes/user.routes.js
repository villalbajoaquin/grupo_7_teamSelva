const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");
const fs = require('fs');
const bcrypt = require('bcrypt');
const {check} = require('express-validator');
const validations = require("../middlewares/usersMid");

// routes
    // register (GET)
    userRoutes.get('/register', userController. register_createA);

    // register (POST)
    userRoutes.post('/register', validations.register, userController.register_createB);

    // login
    userRoutes.get('/login', userController.login);

    // login POST
    userRoutes.post('/login', [
        check('email').isEmail().withMessage('Email Invalido'),
        check('password').isLength({min: 8}).withMessage('La contraseña debe tener minimo 8 caracteres')
    ] ,userController.processLogin);

module.exports = userRoutes;