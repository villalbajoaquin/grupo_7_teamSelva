const path = require("path");
const db = require('../database/models');
const { Op } = db.Sequelize;

// controller
const mainController = {
    index: (req, res) => {
        db.Product.findAll({
            order: [
                ['date', 'ASC'],
                ['time', 'ASC']
            ],
            limit: 9
        }).then(shows => {
            res.render('index', { shows })
        }).catch(err => {
            res.send(err)
        });
    }
}

module.exports = mainController; 