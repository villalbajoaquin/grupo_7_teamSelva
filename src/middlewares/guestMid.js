function guestMiddleware (req, res, next){
    if (req.session.userLogged == undefined) {
        next();
    }else{
        res.redirect('/');
    }
}
module.exports = guestMiddleware;