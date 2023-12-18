const express = require('express');
const router = express.Router();
const { getAllProducts, getDetailProduct, getAllHotels } = require('../controllers/apiController');

// /api

router
    .get('/products',getAllProducts)
    //test: http://localhost:3000/api/products
    .get('/detail/:id',getDetailProduct) 
    //test; http://localhost:3000/api/detail/1
    .get('/hotels',getAllHotels)
    //test: http://localhost:3000/api/hotels



module.exports = router;