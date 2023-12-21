const {validationResult} = require('express-validator');
const db = require('../../database/models');

module.exports = async (req,res) =>{
  const errors = validationResult(req);

  if(errors.isEmpty()){
    const {date,departure,arrival,price, airline, destinity} = req.body;
    
    await db.Flight.create({
      date,
      departure,
      arrival,
      price,
      airlineId : airline,
      productId : destinity
    });
    return res.redirect('/dashboard')

  }else{
    const countries = db.Countrie.findAll({
      order : ['name']
    });

    const products = db.Product.findAll({
      where : {
        lodging : false
      },
      order : ['name']
    });

    const airlines = db.Airline.findAll({
      order : ['name']
    })

    Promise.all([countries,products, airlines])
    .then(([countries,products, airlines]) => {
      return res.render("productAddVuelo", {
        countries,
        destinities : products,
        airlines,
        errors : errors.mapped(),
        old : req.body
  
      });
    })
    .catch(error => console.log(error))
  
  }
}