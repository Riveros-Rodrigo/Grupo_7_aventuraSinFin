const {validationResult} = require('express-validator');
const db = require('../../database/models');

module.exports = async (req,res) =>{
  const errors = validationResult(req);

  if(errors.isEmpty()){
    const {name,city,country,description} = req.body;
    //creo el nuevo producto en la base de dato.
    //usando async y await nos evitamos llenar el codigo de promesas, de esta manera nos evitamos la anidacion de .then()
    
    await db.Product.create({
      lodging : false,
      name: name.trim(),
      city: city.trim(),
      countryId: country ? +country : null,
      description : description.trim(),
      image : req.file ? req.file.filename : null
    });
    return res.redirect('/dashboard')

  }else{
    //hacemos los llamados correspondientes para renderizar la vista productAdd.
    const countries = await db.Countrie.findAll({
      order : ['name']
    });

    return res.render("productAdd", {
      countries,
      errors : errors.mapped(),
      old : req.body
    });
  }
}