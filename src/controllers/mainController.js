const path = require("path");

const productArray = require('../data/products.json');
//console.log(productArray);

// controller
const mainController = {
    index: (req, res) => {
        let shows = productArray;
        let showsPerDay = shows.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return da - db;
        });
        res.render('index', {shows: shows});
    }
}

module.exports = mainController; 