const db = require("../../database/models");

module.exports =  (req, res) => {

  const hotels = db.Hotel.findAll({
    order : [['productId', 'ASC']] //Ordeno por productId de forma ascendente
  })
  
    const countries = db.Countrie.findAll({
      order : ['name']
    });

    const product = db.Product.findByPk(req.params.id);
    
    Promise.all([product, hotels, countries])
      .then(([product, hotels, countries]) => {
        return res.render("productEdit", {
          ...product.dataValues,
          hotels,
          countries
      });
      })
      .catch(error => console.log(error))
  }