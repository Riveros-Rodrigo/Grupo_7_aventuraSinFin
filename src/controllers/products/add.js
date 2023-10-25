const db = require('../../database/models')

module.exports = (req, res) => {
    
    const hotels = db.Hotel.findAll({
      order : ['name']
    });

    const categories = db.Categorie.findAll({
      order : ['name']
    });

    Promise.all([hotels, categories])
      .then(([hotels, categories]) => {
        return res.render("productAdd", {
          hotels,
          categories
        });
      })
      .catch(error => console.log(error))

   
  }