const {validationResult} = require('express-validator');
const db = require('../../database/models');

module.exports = async (req,res) =>{
  const errors = validationResult(req);

  if(errors.isEmpty()){
    const {country,hotelId,description,price,discount,name} = req.body;
    //creo el nuevo producto en la base de dato.
    //usando async y await nos evitamos llenar el codigo de promesas, de esta manera nos evitamos la anidacion de .then()
    
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

  }else{
    //hacemos los llamados correspondientes para renderizar la vista productAdd.
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