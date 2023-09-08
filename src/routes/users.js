const express = require('express');
const { register, processRegister, shoppingCart, login, processLogin, profile, updateProfile } = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const router = express.Router();

/* /users */
router.get('/register', register);
router.post('/register', registerValidator, processRegister);
router.get('/login', login);
router.post('/login',loginValidator, processLogin); //tengo que poner login validator
router.get('/profile', profile)
router.put('/profile', updateProfile)
router.get('/shoppingCart', shoppingCart);

module.exports = router;
