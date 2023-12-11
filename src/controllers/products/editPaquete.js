const db = require("../../database/models");

module.exports =  (req, res) => {

    const hotels = db.Hotel.findAll({
      order : ['name']
    })
    const countries = db.Countrie.findAll({
      order : ['name']
    });

    const product = db.Product.findByPk(req.params.id);
    
    Promise.all([product, hotels, countries])
      .then(([product, hotels, countries]) => {
        return res.render("productEditPaquete", {
          ...product.dataValues,
          hotels,
          countries
      });
      })
      .catch(error => console.log(error))
  }
