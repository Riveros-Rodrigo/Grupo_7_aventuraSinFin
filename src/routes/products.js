const express = require('express');
const { detail, add, addHotel, detailHotel, addPaquete , edit, create, update, remove, filter, createHotel, createPaquete, editPaquete, editHotel, updateHotel, updatePaquete } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const productAddValidator = require('../validations/productAddValidator');
const productAddValidatorHotel = require('../validations/productAddValidatorHotel');
const productAddValidatorPaquete = require('../validations/productAddValidatorPaquete');

const router = express.Router();

router
    .get('/detail/:id', detail)
    .get('/detail/hotel/:id', detailHotel)
    .get('/add', add)
    .post('/add', upload.single('images'),create)
    .get('/add/hoteles', addHotel)
    .post('/add/hoteles', upload.single('images'), productAddValidatorHotel ,createHotel)
    .get('/add/paquetes', addPaquete)
    .post('/add/paquetes',upload.single('images'), productAddValidatorPaquete,createPaquete)
    .get('/edit/:id',upload.single('images'), edit)
    .get('/editPaquete/:id',upload.single('images'), editPaquete)
    .get('/editHotel/:id',upload.single('images'), editHotel)
    .put('/update/:id', upload.single('image'), update) // actualización
    .put('/update/:id', upload.single('image'), updateHotel) // actualización
    .put('/update/:id', upload.single('image'), updatePaquete) // actualización
    .delete('/remove/:id', remove)
    .get('/filter',filter)

module.exports = router;