const path = require("path");
const fs = require('fs');
const { json } = require('express');

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
    product_editA: (req, res) => {
        let id = req.params.id
        let shows = productArray;
        let product_edit = shows.find((item) => item.id == id);
        res.render('./products/productEdit', { shows:product_edit });
    },

    product_editB: (req, res) => {
        let id = req.params.id
        let shows = productArray;
        const { name, date, tickets, price, imgsrc } = req.body;
        shows = shows.filter((item) => item.id != id);
        shows.forEach(item => {
            if(item.id == id)
            item.name = name;
            item.date = date;
            item.tickets = tickets;
            item.price = price;
            item.imgsrc = imgsrc;         
        });
        fs.writeFileSync(
            path.join(__dirname, "../data/products.json"),
            JSON.stringify(shows, null, 4),
            {
                encoding: "utf-8",
            }
        );
        res.render('./products/productEdit', {shows});
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
        res.render('./products/productList', {shows});
    }
};

module.exports = productController; 