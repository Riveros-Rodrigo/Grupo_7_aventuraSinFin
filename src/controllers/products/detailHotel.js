const db = require("../../database/models");
const moment = require('moment');
const toThousand = require('../../utils/toThousand')


module.exports = (req, res) => {
    
   db.Product.findByPk(req.params.id,{
    include : [
      {
        association : 'countrie'
      },
      {
        association : 'hotels',
        include : ['agency']
      }
    ]
   })
    .then(product => {
      return res.render("productHotel", {
        ...product.dataValues,
        moment,
        toThousand 
      });
    })
    .catch(error => console.log(error))

  
  }