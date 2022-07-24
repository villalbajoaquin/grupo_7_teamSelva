const user = require('../models/data/users.json');
const fs = require('fs');

function userLoggedMiddleware (req, res, next) {
    
    next();

    if(req.cookies.recordarme != undefined //si esta cookie existe pero en session el usuario logueado no existe
        && req.session.userLogged == undefined) {
          let usersJSON = fs.readFileSync('users.json', { //lee todos los usuarios
            enconding: 'UTF-8'});
            let users;
            if(usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }
            let userMatch
          
            for(let i =0; i < user.length; i++) {  
                if(users[i].email == req.cookies.recordarme) { //si el usuario que esta ahora es igual al mail que tengo en la cookie
                    userMatch = users[i];
                    break
                }
            }

            delete userMatch.password;
            
            req.session.userLogged = userMatch; // coloca al usuario en session
    }
}

module.exports = userLoggedMiddleware;