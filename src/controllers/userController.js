const path = require("path");
const fs = require('fs');
const { json } = require('express');
const bcryptjs = require('bcryptjs');

const usersArray = require('../data/users.json');
const { validationResult } = require("express-validator");

const userController = {
    register_createA: (req, res) => {
        res.render('users/register');
    },
    register_createB: (req, res) => {
        let users = usersArray;
        const newId = Math.max(...users.map(item => item.id)) + 1;
        let file = req.file;
        console.log(file.filename);

        let newUser = {
            id: newId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            cud: req.body.cud,
            // imgsrc: `img/users/${file.filename}`,
        }
        users.push(newUser)
        fs.writeFileSync(
            path.join(__dirname, "../data/users.json"),
            JSON.stringify(users, null, 4),
            {
                encoding: "utf-8",
            }
        );
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
                if (userMatch.permisos == 'admin') {
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