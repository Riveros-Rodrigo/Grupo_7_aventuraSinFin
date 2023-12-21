const db = require('../../database/models')

module.exports = (req, res) => {
    
    const countries = db.Countrie.findAll({
      order : ['name']
    });

    Promise.all([countries])
      .then(([ countries]) => {
        return res.render("productAddHotel", {
          countries
        });
      })
      .catch(error => console.log(error))

   
  }