const db = require('../../database/models')

module.exports = (req, res) => {
    
    const hotels = db.Hotel.findAll({
      order : ['name']
    });

    const countries = db.Countrie.findAll({
      order : ['name']
    });

    Promise.all([hotels, countries])
      .then(([hotels, countries]) => {
        return res.render("productAddHotels", {
          hotels,
          countries
        });
      })
      .catch(error => console.log(error))

   
  }