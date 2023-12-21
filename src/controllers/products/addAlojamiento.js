const db = require('../../database/models')

module.exports = (req, res) => {
    
    const hotels = db.Product.findAll({
      where : {
        lodging : true,
      },
      order : [['name', 'ASC']] //Ordeno por productId de forma ascendente
    });

    const countries = db.Countrie.findAll({
      order : ['name']
    });

    const agencies = db.Agency.findAll({
      order : ['name']
    });

    Promise.all([hotels, countries, agencies])
      .then(([hotels, countries, agencies]) => {
        return res.render("productAddAlojamiento", {
          hotels,
          countries, 
          agencies
        });
      })
      .catch(error => console.log(error))

   
  }