const { check } = require('express-validator');

const create = [
    check('name')
        .notEmpty().withMessage('Ingresa el nombre').bail()
        .isLength({ max: 100 }).withMessage('No puede ser tan largo el nombre'),
    check('date')
        .notEmpty().withMessage('Ingresa la fecha').bail()
        .isDate().withMessage('Ingresa una fecha válida')
        .isAfter('2022-01-01').withMessage('Ingresa una fecha válida'),
    check('time')
        .notEmpty().withMessage('Ingresa la hora').bail(),
    check('tickets')
        .notEmpty().withMessage('Ingresa la cantidad de tickets').bail()
        .isNumeric().withMessage('Ingresa un numero de tickets')
        .isLength({ max: 8 }).withMessage('Ingresa una cantidad limitada'),
    check('price')
        .notEmpty().withMessage('Ingresa el precio por cada ticket').bail()
        .isNumeric().withMessage('Ingresa un numero para el precio')
        .isLength({ max: 8 }).withMessage('Ingresa una cantidad limitada'),
    check('imgsrc').custom((value, { req }) => {
            let file = req.file;
            let extensionesPermitidas = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.jfif'];
            let fileExtension = path.extname(file.originalname);
            if (!file) {
                throw new Error('Seleccioná una imagen para tu producto');
            } else if (!extensionesPermitidas.includes(fileExtension.toLowerCase())) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensionesPermitidas.join(", ")}`);
            };
            return true;
        })
];

module.exports = { create };