const { body } = require('express-validator');


const register = [
    body('firstname').notEmpty().withMessage('Por favor ingresa tu nombre'),
    body('lastname').notEmpty().withMessage('Es necesario que completes tu apellido'),
    body('email')
        .notEmpty().withMessage('Por favor ingresa tu correo').bail()
        .isEmail().withMessage('Por favor ingresa un correo válido'),
    body('password').notEmpty().withMessage('No olvides tu contraseña'),
    body('passwordRe')
        .notEmpty().withMessage('Por favor repite tu contraseña.').bail()
        .custom((value, { req }) => {
            let passOriginal = req.body.password;
            let nuevaPass = req.body.passwordRe;

            if (passOriginal != nuevaPass) {
                throw new Error('Las contraseñas no coinciden.');
            }
            return true;
        })//, para las fotos!!
  /*body('profilePicture').custom((value, { req }) => {
        let file = req.file;
        let extensionesPermitidas = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.jfif'];
        let fileExtension = path.extname(file.originalname);
        if (!file) {
            throw new Error('Seleccioná una imagen para tu producto');
        } else {
            if (!extensionesPermitidas.includes(fileExtension.toLowerCase())) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensionesPermitidas.join(", ")}`)
            }
        }
        return true;
    })*/
];
/*const validationsLogin = [
    body('email')
        .notEmpty().withMessage('Por favor completá tu correo').bail()
        .isEmail().withMessage('¡El formato del correo no es válido! Intentalo de nuevo'),
    body('password').notEmpty().withMessage('No olvides tu contraseña'),
];*/

module.exports = {register};