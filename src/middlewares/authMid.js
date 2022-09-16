function authMiddleware (req, res, next){

    if (req.session.userLogged != undefined) {
        next();
    }else{
        res.redirect('/user/login');
    }
}
module.exports = authMiddleware;