function authMiddleware (req, res, next){
    if (req.session.userLogged != undefined) {
        next();
    }
    res.redirect('/login');
    
}
module.exports = authMiddleware;