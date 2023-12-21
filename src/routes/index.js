const express = require('express');
const { index, search, dashboard, vuelos, hotels } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');
const router = express.Router();

/* GET home page. */
router.get('/', index );
router.get('/search', search); 
router.get('/dashboard/:categorie?',(req,res,next) => {console.log(req.params.categorie);next();},dashboard)
router.get('/vuelos', vuelos)
router.get('/hotels', hotels)

module.exports = router;
