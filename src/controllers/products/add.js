const db = require('../../database/models')

module.exports = (req, res) => {

    const countries = db.Countrie.findAll({
      order : ['name']
    });
    const hotels = db.Hotel.findAll({
      order : ['name']
    });
    const packages = db.Package.findAll({
      order : ['name']
    });

    Promise.all([countries,hotels,packages])
    .then(([countries,hotels,packages]) =>{
      return res.render("productAdd", {
        countries,
        hotels,
        packages
      })
    })
    .catch(error => console.log(error));
  }