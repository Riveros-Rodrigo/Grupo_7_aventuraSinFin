const {validationResult} = require('express-validator');
const db = require('../../database/models')

module.exports = async(req, res) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
    const {hotelId,name,description,price,discount} = req.body

    await db.Product.create({
        hotelId : +hotelId,
        countryId: null,
        name,
        description : description.trim(),
        price: +price,
        discount : discount || 0,
        image : req.file ? req.file.filename : null
    });
    return res.redirect('/dashboard')

    }else{
        const hotels = await db.Hotel.findAll({
            order : ['name']
        });

        const countries = await db.Countrie.findAll({
            order : ['name']
        });

    return res.render("productAddHotels", {
        hotels,
        countries,
        errors : errors.mapped(),
        old : req.body
    });
    } 
    }