const {check} = require('express-validator');
const {compareSync} = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Email no válido'),
    check('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .custom((value, {req}) => {
            return db.User.findOne({
                where : {
                    email : req.body.email
                }
            })
                .then(user => {
                    if(!user || !compareSync(value,user.password)){
                        return Promise.reject()
                    }
                })
                .catch(() => Promise.reject('Credenciales inválidas'))

          
        })
]