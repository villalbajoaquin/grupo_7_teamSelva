const path = require("path");
const fs = require('fs');
const { json } = require('express');
const bcrypt = require('bcryptjs');
const cookie = require('cookie-parser')
const db = require('../database/models');
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");


const userController = {
  //Register
  registerView: (req, res) => {
    res.render("users/register");
  },
  register: async (req, res) => {
    let errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, "../../public/img/users", req.file.avatar)
        );
      }

      return res.render("./users/register", { errors: errors.mapped(), old: req.body });
    } else {
      let pass = await bcrypt.hash(req.body.password, 10);

      await db.Users.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        categoryId: 2,
        password: pass,
        avatar: `img/users/${req.file.filename}`,
      })
        .then(() => {
          return res.redirect("/user/login");
        })
        .catch((error) => res.send(error));
    }
  },

  //Login
  loginView: (req, res) => {
    res.render("users/login");
  },
  processLogin: async (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("./users/login", { errors: errors.mapped(), old: req.body });
    } else {
      let userMatch = await db.Users.findOne({
        where: { email: req.body.email },
      });

      let secure = await bcrypt.compare(req.body.password, userMatch.password);

      if (userMatch && secure) {

        if (req.body.recordarme != undefined) {
          res.cookie("recordarme", userMatch.email, { maxAge: 3600000 });
        }

        console.log(req.session)

        req.session.userLogged = userMatch;
        res.cookie("login", userMatch, { maxAge: 9999999999999 });

        console.log(req.session)

        return res.redirect("profile");
      } else {
        res.render(path.join(__dirname, "../views/users/login"), {
          errors: [{ msg: "Datos Incorrectos" }],
        });
      }
    }
  },

  //Vista del Perfil
   profile: (req, res) => {
        const id = req.session.userLogged.id;
        db.Users.findByPk(id)
            .then((user) => {
                return res.render('./users/profile', { user })
            })
    },

  //para eliminar cookie al hacer logout
  logout: (req, res) => {
    res.clearCookie("login");
    res.clearCookie("recordarme");
    req.session.destroy();
    return res.redirect("/");
  },

  
};

module.exports = userController;