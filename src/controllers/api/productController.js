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
        try {
            const product = await db.Product.findByPk(req.params.id);
            const respuesta = {
                meta: {
                    status: 200,
                    url: 'api/products/:id'
                },
                data: product
            };
            res.json(respuesta);
        } catch (err) {
            res.status(404).json(err);
        }
    },
    last_added: async (req, res) => {
        try {
            const product = await db.Product.findOne({
                order: [
                    ['id', 'DESC']
                ]
            });
            const respuesta = {
                meta: {
                    status: 200,
                    url: 'api/products/last-added'
                },
                data: product
            };
            res.json(respuesta);
        } catch (err) {
            res.status(404).json(err);
        }
    },
    next_show: async (req, res) => {
        try {
            const product = await db.Product.findOne({
                order: [
                    ['date', 'ASC'],
                    ['time', 'ASC']
                ]
            });
            const respuesta = {
                meta: {
                    status: 200,
                    url: 'api/products/last-added'
                },
                data: product
            };
            res.json(respuesta);
        } catch (err) {
            res.status(404).json(err);
        }
    }
};

module.exports = productController; 