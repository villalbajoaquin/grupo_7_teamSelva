const path = require("path");
const fs = require('fs');
const { json } = require('express');
const bcrypt = require('bcryptjs');

const usersArray = require('../data/users.json');
const { validationResult } = require("express-validator");

const userController = {
     register_createA: (req, res) => {
        res.render('users/register');
    },
    register_createB: (req, res) => {
        let users = usersArray ;
        const newId = Math.max(...users.map(item => item.id)) + 1;
        let file = req.file;
        console.log(file.filename);
        let newUser = {
            id: newId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password:req.body.password,
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
        res.redirect('/login');

    },
    login: (req, res) => {
        res.render('users/login');
    },
    processLogin: (req, res) => {
     let errors = validationResult(req);

     if(errors.isEmpty()) {
        let usersJSON = fs.readFileSync('users.json', { errors })
        let users;
        if (users.JSON == "") {
            users = [];
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if(bcrypt.compareSync(req.body.password, users[i].password)) {
                    let usuarioaALoguearse = users[i];
                    break
                }
            }

            if(usuarioaALoguearse == undefined) {
                return res.render('login', {errors: [
                    {msg: 'Lo que pusiste esta mal flaco'}
                ]})
            }

            req.session.usuarioLogueado = usuarioaALoguearse;
            res.render('/');
     } else {
         return res.render('login', {errors: errors.errors});
     }
    },
};

module.exports = userController; 