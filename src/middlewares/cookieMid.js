const db = require("../database/models");

async function userLoggedMiddleware (req, res, next) {
    
    next();

    if(req.cookies.recordarme != undefined //si esta cookie existe pero en session el usuario logueado no existe
        && req.session.userLogged == undefined) {
      
            let userMatch = await db.Users.findOne({
                where:  {email: req.cookies.recordarme}
            })
            delete userMatch.password;
            
            req.session.userLogged = userMatch; // coloca al usuario en session
    }
}

module.exports = userLoggedMiddleware;