const express = require('express');
const { productDetail, productAdd, productEdit } = require('../controllers/productsController');

const router = express.Router();

router.get('/productDetail', productDetail);
router.get('/productAdd', productAdd);
router.get('/productEdit', productEdit);

module.exports = router;
