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
      return res.json({ errors: errors });
    } else {
      let pass = await bcrypt.hash(req.body.password, 10);

      await db.Users.create({
        firstName: req.body.nombre,
        lastName: req.body.apellido,
        email: req.body.email,
        categoryId: 2,
        password: pass,
        avatar: req.file.avatar,
      })
        .then(() => {
          return res.json(response);
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
        where: { userEmail: req.body.email },
      });

      let secure = await bcrypt.compare(
        req.body.password,
        userMatch.userPassword
      );

      if (userMatch && secure) {
        userMatch.idUserCategory == 1
          ? (req.session.isAdmin = true)
          : undefined;

        req.session.userLogged = userMatch;

        if (req.body.recordarme != undefined) {
          res.cookie("recordarme", userMatch.userEmail, { maxAge: 3600000 });
        }
        res.redirect("/");
      } else {
        res.render(path.join(__dirname, "../views/users/login"), {
          errors: [{ msg: "Datos Incorrectos" }],
        });
      }
    }
    },
  
  //Vista del Perfil
  profile: (req, res) => {
    res.send("users/profile");
    },
  
  //para eliminar cookie al hacer logout
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  //Pendiente hacer Vista de Administrador

  /*
    admin: (req, res) =>{
        res.render(path.join(__dirname, '../views/adminView.ejs'), {userLog: req.session.userLogged});
    },   
    userData: async (req, res) =>{
        let userData = await db.Users.findByPk(Number( req.session.userLogged.userId)
        })
        })
        res.render(path.join(__dirname, '../views/users/edit-user'), {userData, user:req.session.userLogged });
    }, 
    userEdit: (req, res) =>{
        let errors = validationResult(req);
        console.log(req, errors);
        if(!errors.isEmpty()){
            // // si existe un archivo con propiedad filename
            if (req.file) {
            //     //lo borramos 
            fs.unlinkSync(path.join(__dirname, "../../public/img/users", req.file.filename));
        }
        res.render(path.join(__dirname,'../views/users/edit-user'), {user: userActual, errors:errors.mapped()});
        }else{
            let userData = {
                firstName: req.body.nombre,
                lastName: req.body.apellido,
                email: req.body.email,
                password: req.body.password,
            }
          
            if(req.body.password != undefined){
                userData.userPassword = bcrypt.hashSync(req.body.password, 10);
            }else{
                delete userData.userPassword;
            }
    
            if(req.file){
                fs.unlinkSync(path.join(__dirname, "../../public/img/users", userLogged.avatar));
                userData.avatar = req.file.filename;
            }
    
            db.Users.update(userData,
            {
                where:{
                    userId: Number(req.body.id)
                }
            })
            .then((response) =>{
                return res.json(response)
            })
            .catch(error => res.send(error))
        }
    
    }, 
        userPermissions:(req, res) =>{
            let user = db.Users.findByPk(Number(req.params.id),{
                include: [{association: 'userCategory'}]
            })
            let categories = db.userCategory.findAll({
            })
            Promise.all ([user, categories]) 
              .then(([user, categories]) => {
               
                res.render(path.join(__dirname, '../views/users/edit-permissions.ejs'), {user, categories, userLog: req.session.userLogged });
              })
              .catch(error => res.send(error))
        },
        permissionsProcess:(req, res) =>{
            
            db.Users.update({
                idUserCategory:req.body.permisos,
            },
            {
                where:{
                    userId: req.body.id
                }
            })
            .then(() =>{
                res.redirect('/users/all-users');
            })
            .catch(error => res.send(error))
        },
    
    cargarUsuarios: (req, res) =>{
    
        let users = db.Users.findAll({
            include: [{association: 'userCategory'}]
        })
        let categories = db.userCategory.findAll({
        })
        Promise.all ([users, categories]) 
          .then(([users, categories]) => {
           
            res.render(path.join(__dirname, '../views/users/all-users.ejs'), {users, categories, userLog: req.session.userLogged });
          })
          .catch(error => res.send(error))
        
    },
    delete: async (req, res) => {
        
        await db.Users.destroy({
            where: {userId: Number (req.params.id)} 
        })
        res.redirect('/users/all-users');
    },
    */
};

module.exports = userController;