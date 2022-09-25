const { body } = require('express-validator');
const fs = require("fs");
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require("../database/models");

const validationsRegister = [
  body("firstname")
    .escape()
    .trim()
    .notEmpty()
    .withMessage("El campo nombre no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("El nombre debe de tener al menos tres carácteres")
    .isAlpha()
    .withMessage("No estan permitidos los números o caracteres especiales")
  ,
  body("lastname")
    .escape()
    .trim()
    .notEmpty()
    .withMessage("El campo apellido no puede estar vacio")
    .isLength({ min: 2 })
    .withMessage("El apellido debe de tener al menos dos carácteres")
    .isAlpha()
    .withMessage("No estan permitidos los números o caracteres especiales")
  ,
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Este campo no puede estar vacio").bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido")
    .custom(async (value, { req }) => {
      let match =
        await db.Users.findOne({ where: { email: req.body.email } })
      if (match) {
        throw new Error("Email actualmente en uso");
      }
      return true;
    })
  ,
  body("password")
    .trim()
    .notEmpty()
    .withMessage("El campo contraseña no debe estar vacio")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe de tener como mínimo 8 caracteres"),
  body("passwordRe")
    .notEmpty()
    .withMessage("El campo reingresar contraseña no debe estar vacio")
    .trim()

    .custom(async (confirmPassword, { req }) => {
      const password = req.body.password

      if (password !== confirmPassword) {
        throw new Error('La contraseña no coincide con la ingresada')
      }
    }),

  body("avatar")
    .custom((value, { req }) => {
      let file = req.file;
      let extensionesPermitidas = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.jfif'];
      if (!file) {
        throw new Error('Debes de subir una imagen')
      } else {
        let fileExtension = path.extname(file.originalname);
        if (!extensionesPermitidas.includes(fileExtension)) {
          throw new Error('Las extensiones permitidas son: ' + extensionesPermitidas.join(', '));
        }
      }
      return true;
    }),
];
const validationsLogin = [
  body('email')
    .notEmpty().withMessage('Por favor completá tu correo').bail()
    .isEmail().withMessage('¡El formato del correo no es válido! Intentalo de nuevo')
    .custom(async (value, { req }) => {
      let users = await db.Users.findOne({
        where: { email: req.body.email }
      })
      if (!users) {
        throw new Error("El correo no coincide con un usuario registrado");
      }
      return true;
    })
  ,
  body('password')
    .notEmpty().withMessage('No olvides tu contraseña')
    .isLength({ min: 8 })
    .withMessage("La contraseña debe de tener como mínimo 8 caracteres")
    .custom(async (value, { req }) => {
      let users = await db.Users.findOne({
        where: { email: req.body.email }
      })
      if (users == undefined) {
        throw new Error("Primero debes ingresar un email válido");
      }
      let secure = await bcrypt.compare(req.body.password, users.password)
      if (!secure) {
        throw new Error("La contraseña es incorrecta");
      }
      return true;
    })
];



module.exports = { validationsRegister, validationsLogin };