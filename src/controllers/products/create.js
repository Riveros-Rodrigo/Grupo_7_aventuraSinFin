const {validationResult} = require('express-validator');
const {existsSync, unlinkSync} = require('fs')
const db = require('../../database/models');

module.exports = (req, res) => {
    
    const errors = validationResult(req);

    if(errors.isEmpty()){
      
      const {countrie,hotel,categorie,flight,description,price,discount,package} = req.body

      db.Product.create({
        categoryId : categorie,
        countryId : countrie,
        hotelId : hotel, 
        flightId : flight,
        description : description.trim(),
        price,
        discount : discount || 0,
        packageId : package,
        images : req.files.images ? req.files.images[0].filename : null
      })
        .then(product => {

          if(req.files.images){
            const images = req.files.images.map((file) => {
                return {
                  file : file.filename,
                  main : false,
                  productId : product.id,
                }
            })

            db.Images.bulkCreate(images, {
              validate : true
            }).then(response => {
              return res.redirect('/dashboard');
            })
          }else{
            return res.redirect('/dashboard');

          }
        })
        .catch(error => console.log(error))
     

    }else {

      if(req.files.length){
        req.files.forEach(file => {
          existsSync('./public/images/' + file.filename) && unlinkSync('./public/images/' + file.filename)
        });
      }

      const hotels = db.Hotel.findAll({
        order : ['name']
      });
  
      const countries = db.Countrie.findAll({
        order : ['name']
      });
  
      Promise.all([hotels, countrie])
        .then(([hotels, countries]) => {
          return res.render("productAdd", {
            hotels,
            countries,
            errors : errors.mapped(),
            old : req.body
          });
        })
        .catch(error => console.log(error))
    }
  
  }