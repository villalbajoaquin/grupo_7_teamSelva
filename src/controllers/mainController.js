const path = require("path");

const productArray = require('../data/products.json');
//console.log(productArray);

// controller
const mainController = {
    index: (req, res) => {
        let shows = productArray;
        res.render('index', {shows: shows});
    }
}

module.exports = mainController; 