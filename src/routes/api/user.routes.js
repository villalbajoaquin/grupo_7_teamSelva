const express = require("express");
const userController = require("../../controllers/api/userController");
const userRoutes = express.Router();

userRoutes.get("/", userController.list);

// product detail
// userRoutes.get('/:id', userController.detail);

module.exports = userRoutes;