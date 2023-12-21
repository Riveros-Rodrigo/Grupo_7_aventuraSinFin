const {validationResult} = require('express-validator');
const db = require('../../database/models')

module.exports = async(req, res) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
    const {hotel,stay,passengers,wifi,breakfast,parking,checkInWeb,price,agencyId} = req.body
        return res.send(req.body)
    await db.Product.create({
        hotel,
        stay : stay.trim(),
        passengers,
        wifi,
        breakfast,
        parking,
        checkInWeb,
        price: +price,
        agencyId,
        image : req.file ? req.file.filename : null
    });
    return res.redirect('/dashboard')

    }else{
        const hotels = await db.Hotel.findAll({
            order : [['productId', 'ASC']] //Ordeno por productId de forma ascendente
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