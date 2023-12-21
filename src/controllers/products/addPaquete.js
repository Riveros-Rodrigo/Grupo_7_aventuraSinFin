const db = require('../../database/models')

module.exports = (req, res) => {
    
    const hotels = db.Hotel.findAll({
      order : [['productId', 'ASC']] //Ordeno por productId de forma ascendente
    });

    const countries = db.Countrie.findAll({
      order : ['name']
    });

    Promise.all([hotels, countries])
      .then(([hotels, countries]) => {
        return res.render("productAddPaquete", {
          hotels,
          countries
        });
      })
      .catch(error => console.log(error))

   
  }