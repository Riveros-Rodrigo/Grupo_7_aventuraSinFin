const express = require('express');
const methodOverride = require('method-override');
const { detail, add, edit, create, update, remove } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const router = express.Router();

const fs = require('fs');
const path = require('path');
const productsDB = require('../data/products.json'); 


router.use(methodOverride('_method'));

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('productImage'), create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('productImage'), update)
    .delete('/remove/:id', remove)
    .put('/update/:id', upload.array('additionalImages'), (req, res) => {      
        const productId = req.params.id;
        const additionalImages = req.files.map(file => file.filename);    
        const { country, hotel, flight, description, price } = req.body;
    
        // Buscar el producto en la base de datos por su ID
        const productIndex = productsDB.findIndex(product => product.id === parseInt(productId));
        if (productIndex === -1) {
            return res.status(404).send('Producto no encontrado');
        }
    
        // Actualizar los datos del producto
        const updatedProduct = {
            ...productsDB[productIndex],
            country,
            hotel,
            flight,
            description,
            price,
            additionalImages
        };
    
        // Actualizar la base de datos
        productsDB[productIndex] = updatedProduct;
    
        // Guardar los cambios en el archivo JSON
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productsDB, null, 2));
    
        res.redirect('/dashboard');
    });
    

module.exports = router;