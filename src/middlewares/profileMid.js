module.exports = (req, res, next) => {
    if(req.session && req.session.userLogged) {
        next();
    } else {
        return res.redirect("/")
    }
}