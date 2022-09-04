const path = require("path");
const fs = require('fs');
const { json } = require('express');
const bcrypt = require('bcryptjs');
const cookie = require('cookie-parser')
const db = require('../database/models');
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");

const userController = {
    registerView: (req, res) => {
        res.render('users/register');
    },
    register: async (req, res) => {
        let errors = validationResult(req);
        console.log(errors);
        
        if(!errors.isEmpty()){

        if (req.file) {
      
        fs.unlinkSync(path.join(__dirname, "../../public/img/users", req.file.avatar));
         }
         return res.json({errors:errors});

        } else{

        let pass = await bcrypt.hash(req.body.password, 10);

        await db.Users.create({
        firstName: req.body.nombre,
        lastName: req.body.apellido,
        email: req.body.email,
        categoryId: 2,
        password: pass,
        avatar: req.file.avatar,
        })
        .then(() =>{
            return res.json(response)
        })
        .catch(error => res.send(error))

        }
    },

    processLogin: async (req, res) =>{

        let errors = validationResult(req);

        if(!errors.isEmpty()){
         res.render('./users/login', {errors:errors.mapped(), old: req.body});
        } else{
       
            
        let userMatch = await db.Users.findOne({
            
                where: {userEmail: req.body.email}
        });

        let secure = await bcrypt.compare(req.body.password, userMatch.userPassword)

        if(userMatch && secure ){
            
            userMatch.idUserCategory == 1? req.session.isAdmin = true : undefined
            
            req.session.userLogged = userMatch;

            if(req.body.recordarme != undefined) {
            res.cookie('recordarme', userMatch.userEmail, { maxAge: 3600000 })
            }
            res.redirect('/')
        }else{
            res.render(path.join(__dirname, '../views/users/login.ejs'), {errors: [
            {msg: 'Datos Incorrectos'}
            
        ]})
    }

} 
},
  //para eliminar cookie al hacer logout
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
},

//Pendiente hacer Vista de Administrador
admin: (req, res) =>{
    res.render(path.join(__dirname, '../views/adminView.ejs'), {userLog: req.session.userLogged});
},
registerView: (req, res)=>{
    res.render(path.join(__dirname, '../views/users/register.ejs'))
},
/*
userData: async (req, res) =>{
    let userData = await db.Users.findByPk(Number( req.session.userLogged.userId)
    })
    })
    res.render(path.join(__dirname, '../views/users/edit-user'), {userData, user:req.session.userLogged });
}, */

    profile: (req, res) => {
        res.send('users/profile')
    }
};

module.exports = userController;