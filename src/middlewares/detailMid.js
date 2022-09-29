const db = require("../database/models");

module.exports = async (req, res, next) => {

    let match = await db.Product.findOne({ where: { id: req.params.id } });

    if (match) {
        next();
    } else {
        res.redirect('/product');
    }
};