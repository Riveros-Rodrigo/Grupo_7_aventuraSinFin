const db = require("../../database/models");

module.exports =  (req, res) => {

 
    const countries = db.Countrie.findAll({
      order : ['name']
    });

    const product = db.Product.findByPk(req.params.id,{
      include : ['countrie']
    });
    
    Promise.all([product,  countries])
      .then(([product,  countries]) => {
        return res.render("productEdit", {
          ...product.dataValues,
          
          countries
      });
      })
      .catch(error => console.log(error))
  }