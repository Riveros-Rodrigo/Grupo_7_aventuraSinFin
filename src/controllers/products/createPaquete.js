const {validationResult} = require('express-validator');
const db = require('../../database/models');

module.exports = async (req,res) =>{
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {country,hotelId,description,price,discount,name} = req.body;
        
        await db.Product.create({
            name,
            countryId: country ? +country : null,
            hotelId : hotelId ? +hotelId : null,
            description : description.trim(),
            price,
            discount : discount || 0,
            image : req.file ? req.file.filename : null
        });
        return res.redirect('/dashboard')
    } else{
        const hotels = await db.Hotel.findAll({
            order : ['name']
        });

        const countries = await db.Countrie.findAll({
            order : ['name']
        });

        return res.render("productAddPaquete", {
            hotels,
            countries,
            errors : errors.mapped(),
            old : req.body
        });
    }
}
