const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('El nombre es requerido').bail()
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('surname')
        .notEmpty().withMessage('El apellido es requerido').bail()
        .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('birthday')
        .notEmpty().withMessage('La fecha de nacimiento es requerida')
        .isDate().withMessage('La fecha de nacimiento debe ser una fecha válida'),
    body('genero')
        .notEmpty().withMessage('El género es requerido')
];
