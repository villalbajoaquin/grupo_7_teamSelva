const path = require("path");
const fs = require('fs');
const { json } = require('express');
const methodOverride = require('method-override');

const productArray = require('../data/products.json');
//console.log(productArray);


// controller
const productController = {
    product_list: (req, res) => {
        let shows = productArray;
        res.render('products/productList', { shows });
    },
    product_search: (req, res) => {
        let shows = productArray;
        let input = req.query.search;
        let filteredShows = [];

        for (let i = 0; i < shows.length; i++) {
            if (shows[i].name.includes(input)) {
                filteredShows.push(shows[i]);
            };
        };

        res.render('products/productList', { shows: filteredShows });
    },
    product_detail: (req, res) => {
        let shows = productArray;
        let id = req.params.id;
        let show = shows.find((item) => item.id == id);
        res.render('products/productDetail', { show });
    },
    product_cart: (req, res) => {
        res.render('products/productCart');
    },
    product_create: (req, res) => {
        res.render('products/productCreate');
    },
    product_edit: (req, res) => {
        res.render('products/productEdit');
    },
    product_delete: (req, res) =>{
        let shows = productArray;
        let id = req.params.id;
        shows = shows.filter((item) => item.id != id);

        fs.writeFileSync(
            path.join(__dirname, "../data/products.json"),
            JSON.stringify(shows, null, 4),
            {
                encoding: "utf-8",
            }
        );
        res.render('/product/productList', {shows});
    }
};

module.exports = productController; 