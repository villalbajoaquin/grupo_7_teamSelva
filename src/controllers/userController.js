const path = require("path");
const fs = require('fs');
const { json } = require('express');
const bcryptjs = require('bcryptjs');

const usersArray = require('../data/users.json');
const { validationResult } = require("express-validator");

const userController = {
    registerView: (req, res) => {
        res.render(path.join(__dirname, 'users/register'));
    },
    register: (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            if (req.file) {
                fs.unlinkSync(path.join(__dirname, "../public/img/users", req.file.filename));
            }
            res.render("./users/register", { errors: errors.mapped(), old: req.body });      
        } else {
            
            let generadorId;
            users.length === 0? generadorId = users.length : generadorId = (users.at(-1).id)+1

            let formDataUser = {
            id: generadorId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            category: "user",
            cud: req.body.cud,
            avatar: req.file.filename,
        }
        }
      
        users.push(formDataUser)  
        let newDataUsers = JSON.stringify(users, null, 4);
        fs.writeFileSync(path.join(__dirname, "../data/users.json"), newDataUsers);

        res.redirect('users/login');

    },
    login: (req, res) => {
        res.render('users/login');
    },
    loginProcess: (req, res) => {
        let users = usersArray;
        let errors = validationResult(req);
        if (!errors.length > 0) {
            res.render('./users/login', { errors: errors.mapped(), old: req.body });
        } else {

            //comparing database

            let userMatch = users.find((user) => {
                return user.email === req.body.email && bcrypt.compareSync(req.body.password, user.password);
            });
            // Aca vemos si el usuario existe, y sino mostramos un mensaje de error

            if (userMatch) {
                if (userMatch.category == 'admin') {
                    req.session.isAdmin = true;
                }
            
            //delete userMatch.password;

            req.session.userLogged = userMatch;

            //si esta tildado el checkbox recordame //si no esta tildado viene como undefined

            if(req.body.recordarme != undefined) {
                res.cookie('recordarme', userMatch.email, { maxAge: 3600000 })
             }
             res.redirect('/')    
            }else{
                res.render(path.join(__dirname, '../views/users/login.ejs'), {errors: [
                {msg: 'Datos Incorrectos'}
            ]});
        }
    }
}
};

module.exports = userController; 