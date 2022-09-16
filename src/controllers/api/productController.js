const db = require('../../database/models');

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
            let errors = {
                status: 500,
                error: err,
            };
            res.json(errors);
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
            let errors = {
                status: 500,
                error: err,
            };
            res.json(errors);
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
            let errors = {
                status: 500,
                error: err,
            };
            res.json(errors);
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
            let errors = {
                status: 500,
                error: err,
            };
            res.json(errors);
        }
    }
};

module.exports = productController; 