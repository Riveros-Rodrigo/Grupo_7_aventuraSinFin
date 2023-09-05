const {check} = require('express-validator')

module.exports = [
    check("name")
        .isLength({
        min: 2,
        })
        .withMessage("Debe tener como mínimo dos letras")
        .bail()
        .isAlpha('es-ES')
        .withMessage("Solo se permiten caracteres alfabéticos"),
    check("surname")
        .isLength({
        min: 2,
        })
        .withMessage("Debe tener como mínimo dos letras")
        .bail()
        .isAlpha()
        .withMessage("Solo se permiten caracteres alfabéticos"),
    check("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .bail()
        .isEmail()
        .withMessage("Email no válido").bail(),
    check("password")
        .isLength({
            min: 6,
            max: 12,
        })
        .withMessage("Debe tener entre 6 y 12 caracteres"),
    check("password2")
        .custom((value, { req }) => { 
            //si el valor del input es diferente al que viene por el req.body.password me retorna false si da bien es true
            return value !== req.body.password ? false : true;
        }).withMessage("Las contraseñas no coinciden")
]