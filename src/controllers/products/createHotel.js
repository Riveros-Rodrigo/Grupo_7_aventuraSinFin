const db = require('../../database/models')

module.exports = async(req, res) => {
    
   try {
    const {hotel,countrieId} = req.body
    
    const newHotel = await db.Hotel.create({
        name: hotel,
        countrieId,
        image: req.file?.filename
    });
    console.log(newHotel);
    return res.redirect('/dashboard')
   } catch (error) {
    console.log(error);
   }

   
  }