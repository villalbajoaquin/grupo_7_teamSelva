const path = require("path");
const fs = require('fs');
const { validationResult } = require('express-validator');
const db = require('../../database/models');
const Op = db.Sequelize.Op;


// controller
const productController = {
    list: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                order: [
                    ['date', 'ASC'],
                    ['time', 'ASC']
                ]
            });
            const respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            };
            res.json(respuesta);
        } catch (err) {
            res.status(404).json(err);
        }
    },
    detail: async (req, res) => {
        /*db.Product.findByPk(req.params.id)
            .then(show => {
                res.render('products/productDetail', { show });
            }).catch(err => {
                res.send(err);
            });*/
    }
};

module.exports = productController; 