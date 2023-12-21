const {check} = require('express-validator')

module.exports = [
    check('name')
        .notEmpty().withMessage('Es obligatorio agregar el nombre del destino'),
    check('country')
        .notEmpty().withMessage('Es obligatorio agregar el país'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 20,
            max: 300
        }).withMessage('La descripción debe tener entre 20 y 300 caracteres'),
    check('images')
        .custom((value, {req}) =>{
            if(req.file){
                return true
            }
            return false
        }).withMessage('No has subido ninguna imagen')
]
