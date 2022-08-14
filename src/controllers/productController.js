const path = require("path");
const fs = require('fs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const Op = db.Sequelize.Op;


// controller
const productController = {
    product_list: (req, res) => {

        db.Product.findAll({
            order: [
                ['date', 'ASC'],
                ['time', 'ASC']
            ]
        }).then(shows => {
            res.render('products/productList', { shows });
        }).catch(err => {
            res.send(err);
        });
    },
    product_cart: (req, res) => {
        res.render('products/productCart');
    },
    product_createA: (req, res) => {
        res.render('products/productCreate');
    },
    product_createB: (req, res) => {
        db.Product.create(
            {
                name: req.body.name,
                imgsrc: `img/uploads/${req.file.filename}`,
                date: req.body.date,
                time: req.body.time,
                tickets: req.body.tickets,
                price: req.body.price
            }
        ).then(() => {
            res.redirect('/product');
        }).catch(err => {
            res.send(err);
        });
        /*let errors = validationResult(req);

        if (req.file) {
            let file = req.file;
            console.log(file.filename);
        };
        if (errors.length = 0) {
            db.Product.create(
                {
                    name: req.body.name,
                    imgsrc: `img/uploads/${req.file.filename}`,
                    date: req.body.date,
                    time: req.body.time,
                    tickets: req.body.tickets,
                    price: req.body.price
                }
            ).then(() => {
                res.redirect('/product');
            }).catch(err => {
                res.send(err);
            });

        } else {
            if (req.file) {
                fs.unlinkSync(
                    path.join(__dirname, "../../public/img/uploads/", req.file.filename)
                );
            };
            res.render('products/productCreate', { errors: errors.mapped(), old: req.body });
        };*/
    },
    product_search: (req, res) => {
        let input = req.query.search;

        db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${input}%`
                }
            },
            order: [
                ['date', 'ASC'],
                ['time', 'ASC']
            ]
        }).then(shows => {
            res.render('products/productList', { shows });
        }).catch(err => {
            res.send(err);
        });
    },
    //product time filters
    twenty_four: (req, res) => {
        db.Product.findAll({
            where: {
                date: {
                    [Op.lte]: new Date(new Date() + 24 * 60 * 60 * 1000)
                }
            },
            order: [
                ['date', 'ASC'],
                ['time', 'ASC']
            ]
        }).then(shows => {
            res.render('products/productList', { shows });
        }).catch(err => {
            res.send(err);
        });
    },
    seven: (req, res) => {
        db.Product.findAll({
            where: {
                date: {
                    [Op.lte]: new Date(new Date() + 7 * 24 * 60 * 60 * 1000)
                }
            },
            order: [
                ['date', 'ASC'],
                ['time', 'ASC']
            ]
        }).then(shows => {
            res.render('products/productList', { shows });
        }).catch(err => {
            res.send(err);
        });
    },
    thirty: (req, res) => {
        db.Product.findAll({
            where: {
                date: {
                    [Op.lte]: new Date(new Date() + 30 * 24 * 60 * 60 * 1000)
                }
            },
            order: [
                ['date', 'ASC'],
                ['time', 'ASC']
            ]
        }).then(shows => {
            res.render('products/productList', { shows });
        }).catch(err => {
            res.send(err);
        });
    },
    //product time filters
    product_editA: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(shows => {
                res.render('products/productEdit', { shows });
            }).catch(err => {
                res.send(err);
            });
    },
    product_editB: (req, res) => {
        /*let errors = validationResult(req);
        let id = req.params.id;
        if (req.file) {
            let file = req.file;
            console.log(file.filename);
        };
        if (errors.length > 0) {
            let product_edit = shows.find((item) => item.id == id);
            res.render('products/productEdit', { errors: errors.mapped(), old: req.body, shows: product_edit });
        } else {
            const { name, date, tickets, price, time, } = req.body;
            shows.forEach(item => {
                if (item.id == id) {
                    item.name = name;
                    item.date = date;
                    item.time = time;
                    item.tickets = tickets;
                    item.price = price;
                    if (req.file) {
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
        };*/
        if(req.file){
        db.Product.update(
            {
                name: req.body.name,
                imgsrc: `img/uploads/${req.file.filename}`,
                date: req.body.date,
                time: req.body.time,
                tickets: req.body.tickets,
                price: req.body.price
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )}
    },
    product_delete: (req, res) => {
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
        db.Product.findByPk(req.params.id)
            .then(show => {
                res.render('products/productDetail', { show });
            }).catch(err => {
                res.send(err);
            });
    }
};

module.exports = productController; 