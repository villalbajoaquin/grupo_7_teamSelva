const { body } = require('express-validator');
const fs = require("fs");
const path = require('path');


const validationsRegister = [
    body('firstname').notEmpty().withMessage('Por favor ingresa tu nombre'),
    body('lastname').notEmpty().withMessage('Es necesario que completes tu apellido'),
    body('email')
        .notEmpty().withMessage('Por favor ingresa tu correo').bail()
        .isEmail().withMessage('Por favor ingresa un correo válido'),
    body('password').notEmpty().withMessage('No olvides tu contraseña')
    .isLength({ min: 8 })
    .withMessage("La contraseña debe de tener como mínimo 8 caracteres"),
    body('passwordRe')
        .notEmpty().withMessage('Por favor repite tu contraseña.').bail()
        .isLength({ min: 8 })
        .withMessage("La contraseña debe de tener como mínimo 8 caracteres")
        .custom((value, { req }) => {
            let passOriginal = req.body.password;
            let nuevaPass = req.body.passwordRe;

            if (passOriginal != nuevaPass) {
                throw new Error('Las contraseñas no coinciden.');
            }
            return true;
        }),
    
  body('avatar').custom((value, { req }) => {
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
    })
];
const validationsLogin = [
    body('email')
        .notEmpty().withMessage('Por favor completá tu correo').bail()
        .isEmail().withMessage('¡El formato del correo no es válido! Intentalo de nuevo')
        .custom((value, {req})=>{
            let usersFile = fs.readFileSync(path.join(__dirname, '../data/users.json'), { encoding: 'utf-8' });
            let users = JSON.parse(usersFile);     
            let match = users.find((user) => { return user.email === req.body.email})
            if(!match){
             throw new Error("El correo no coincide con un usuario registrado");
              }
              return true;
            }),
    body('password')
    .notEmpty().withMessage('No olvides tu contraseña')
    .isLength({ min: 8 })
    .withMessage("La contraseña debe de tener como mínimo 8 caracteres"),
];



module.exports = {validationsRegister, validationsLogin};