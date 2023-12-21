const db = require('../../database/models')

module.exports = (req, res) => {
    
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
          airlines
        });
      })
      .catch(error => console.log(error))

   
  }