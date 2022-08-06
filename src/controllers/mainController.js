const path = require("path");

//const productArray = require('../data/products.json');
const db = require('../database/models');
const { Op } = db.Sequelize;

// controller
const mainController = {
    index: (req, res) => {
        /*let shows = productArray;
        let showsPerDay = shows.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return da - db;
        });*/
        db.Product.findAll()
            .then( shows => {
                res.render('index', { shows })                
            }).catch(err => {
                res.send(err)
            });
    }
}

module.exports = mainController; 