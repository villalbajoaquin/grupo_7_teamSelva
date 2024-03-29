const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");
const validations = require("../middlewares/usersMid");
const upload = require("../middlewares/multerUser");
const authMid = require('../middlewares/authMid')
const guestMid = require('../middlewares/guestMid');
const profileMid = require("../middlewares/profileMid");

// routes
// register (GET)
userRoutes.get("/register", userController.registerView);

// register (POST)
userRoutes.post("/register", upload.single("avatar"), validations.validationsRegister, userController.register);

// login GET
userRoutes.get("/login", userController.loginView);

// login POST
userRoutes.post("/login",validations.validationsLogin, userController.processLogin);

// profile GET

userRoutes.get("/profile", profileMid, userController.profile);

// profile POST

userRoutes.post("/profile", userController.logout);

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
