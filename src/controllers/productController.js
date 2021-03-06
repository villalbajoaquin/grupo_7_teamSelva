const path = require("path");
const fs = require('fs');
const { validationResult } = require('express-validator');

const productArray = require('../data/products.json');


// controller
const productController = {
    product_list: (req, res) => {
        let shows = productArray;
        let showsPerDay = shows.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return da - db;
        });
        res.render('products/productList', { shows: showsPerDay });
    },
    product_cart: (req, res) => {
        res.render('products/productCart');
    },
    product_createA: (req, res) => {
        res.render('products/productCreate');
    },
    product_createB: (req, res) => {
        let errors = validationResult(req);

        let shows = productArray;
        const newId = Math.max(...shows.map(item => item.id)) + 1;
        if(req.file){
            let file = req.file;
            console.log(file.filename);
        }
        if(errors.length > 0){
            if (req.file) {
                fs.unlinkSync(
                    path.join(__dirname, "../../public/img/uploads/", req.file.filename)
                );
            };
            res.render('products/productCreate', { errors: errors.mapped(), old: req.body });
        } else {
            let newShow = {
                    id: newId,
                    imgsrc: `img/uploads/${req.file.filename}`,
                    name: req.body.name,
                    date: req.body.date,
                    time: req.body.time,
                    tickets: req.body.tickets,
                    price: req.body.price,
                };
            shows.push(newShow)
            fs.writeFileSync(
                 path.join(__dirname, "../data/products.json"),
                JSON.stringify(shows, null, 4),{ encoding: "utf-8", }
            );
            res.redirect('/product');
        };
    },
    product_search: (req, res) => {
        let shows = productArray;
        let showsPerDay = shows.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return da - db;
        });
        let input = req.query.search;
        let filteredShows = [];

        for (let i = 0; i < showsPerDay.length; i++) {
            if (showsPerDay[i].name.includes(input)) {
                filteredShows.push(showsPerDay[i]);
            };
        };

        res.render('products/productList', { shows: filteredShows });
    },
    //product time filters
    twenty_four: (req, res) => {
        let shows = productArray;
        let showsPerDay = shows.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return da - db;
        });
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        let filteredShows = [];

        for (let i = 0; i < showsPerDay.length; i++) {
            let showDate = new Date(showsPerDay[i].date);
            if (showDate < tomorrow) {
                filteredShows.push(showsPerDay[i]);
            };
        };

        res.render('products/productList', { shows: filteredShows });
    },
    seven: (req, res) => {
        let shows = productArray;
        let showsPerDay = shows.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return da - db;
        });
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 7);

        let filteredShows = [];

        for (let i = 0; i < showsPerDay.length; i++) {
            let showDate = new Date(showsPerDay[i].date);
            if (showDate < tomorrow) {
                filteredShows.push(showsPerDay[i]);
            };
        };

        res.render('products/productList', { shows: filteredShows });
    },
    thirty: (req, res) => {
        let shows = productArray;
        let showsPerDay = shows.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return da - db;
        });
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 30);

        let filteredShows = [];

        for (let i = 0; i < showsPerDay.length; i++) {
            let showDate = new Date(showsPerDay[i].date);
            if (showDate < tomorrow) {
                filteredShows.push(showsPerDay[i]);
            };
        };

        res.render('products/productList', { shows: filteredShows });
    },
    //product time filters
    product_editA: (req, res) => {
        let id = req.params.id
        let shows = productArray;
        let product_edit = shows.find((item) => item.id == id);
        res.render('./products/productEdit', { shows:product_edit });
    },
    product_editB: (req, res) => {
        let errors = validationResult(req);

        let id = req.params.id
        let shows = productArray;
        if(req.file){
            let file = req.file;
            console.log(file.filename);
        };
        
        if(errors.length > 0){
            let product_edit = shows.find((item) => item.id == id);
            res.render('products/productEdit', { errors: errors.mapped(), old: req.body, shows:product_edit });
        } else {
            const { name, date, tickets, price, time, } = req.body;
            shows.forEach(item => {
                if(item.id == id) {
                    item.name = name;
                    item.date = date;
                    item.time = time;
                    item.tickets = tickets;
                    item.price = price;
                    if(req.file){
                        item.imgsrc = `img/uploads/${req.file.filename}`;
                    }
                }
            });
            fs.writeFileSync(
                path.join(__dirname, "../data/products.json"),
                JSON.stringify(shows, null, 4),
                {
                    encoding: "utf-8",
                }
            );
            res.redirect('/product');
        };
    },
    product_delete: (req, res) =>{
        let shows = productArray;
        let id = req.params.id;
        // delete image from public/img/
        let showIdentified = shows.find((item) => item.id == id);
        let showPhoto = path.join(__dirname, "../../public/" + showIdentified.imgsrc);
        if (fs.existsSync(showPhoto)) {
            fs.unlinkSync(showPhoto);
        };

        shows = shows.filter((item) => item.id != id);
        fs.writeFileSync(
            path.join(__dirname, "../data/products.json"),
            JSON.stringify(shows, null, 4),
            {
                encoding: "utf-8",
            }
        );
        res.redirect('/product');
        //res.render('./products/productList', {shows});
    },
    product_detail: (req, res) => {
        let shows = productArray;
        let id = req.params.id;
        let show = shows.find((item) => item.id == id);
        res.render('products/productDetail', { show });
    }
};

module.exports = productController; 