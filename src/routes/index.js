const express = require('express');
const { index, search } = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', index );
router.get('/search', search); 

module.exports = router;
