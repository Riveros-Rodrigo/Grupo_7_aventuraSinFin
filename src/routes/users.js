const express = require('express');
const { register, shoppingCart, login, users } = require('../controllers/usersController');
const router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login', login);
router.get('/shoppingCart', shoppingCart);
router.get('/userProfile', users)

module.exports = router;
