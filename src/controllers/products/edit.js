const db = require("../../database/models");

module.exports =  (req, res) => {

    const product = db.Product.findByPk(req.params.id,{
      include : ['images']
    });
    const hotels = db.Hotel.findAll({
      order : ['name']
    })
    const countries = db.Countrie.findAll({
      order : ['name']
    });

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
