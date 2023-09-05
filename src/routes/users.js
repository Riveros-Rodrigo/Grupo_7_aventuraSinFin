const express = require('express');
const { register, processRegister, shoppingCart, login, processLogin, profile, updateProfile } = require('../controllers/usersController');
const router = express.Router();

/* /users */
router.get('/register', register);
router.post('/register', processRegister);
router.get('/login', login);
router.post('/login', processLogin);
router.get('/profile', profile)
router.put('/profile', updateProfile)
router.get('/shoppingCart', shoppingCart);

module.exports = router;
