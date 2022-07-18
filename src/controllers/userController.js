const path = require("path");
const fs = require('fs');
const { json } = require('express');

const usersArray = require('../data/users.json');

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
};

module.exports = userController; 