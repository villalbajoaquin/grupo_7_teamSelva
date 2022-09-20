module.exports = (req,res, next) => {
    if(req.session && req.session.user){
        res.locals.userLogged = req.session.user
    }else if(req.cookies && req.cookies.login) {
        res.locals.userLogged = req.cookies.login
        req.session.user = req.cookies.login
    }
    next();
} 