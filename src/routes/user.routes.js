const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { check } = require("express-validator");
const validations = require("../middlewares/usersMid");
const upload = require("../middlewares/multerUser");

// routes
// register (GET)
userRoutes.get("/register", userController.registerView);

// register (POST)
userRoutes.post("/register", upload.single("avatar"), validations.validationsRegister, userController.register);

// login GET
userRoutes.get("/login", userController.loginView);

// login POST
userRoutes.post("/login", validations.validationsLogin, userController.processLogin
);

// profile GET

userRoutes.get("/profile");

// profile POST

userRoutes.post("/profile", userController.profile);

/*
//user edit

routes.get("/edit-user/:id", userLogg, usersController.userData);

routes.put("/edit-user", [userLogg, upload, updateUser], usersController.userEdit
);

//admin
routes.get("/edit-permissions/:id", adminMid, usersController.userPermissions);

routes.put("/edit-permissions",[adminMid, upload],usersController.permissionsProcess
);
*/

module.exports = userRoutes;
