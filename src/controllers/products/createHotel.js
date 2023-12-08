const db = require('../../database/models')

module.exports = async(req, res) => {
    
   try {
    const {hotelId,country,name,description,price,discount} = req.body
    const newHotel = await db.Hotel.create({
        hotelId,
        countryId: country ? +country : null,
        name,
        description : description.trim(),
        price,
        discount : discount || 0,
        image : req.file ? req.file.filename : null
    });
    return res.redirect('/dashboard')
   } catch (error) {
    console.log(error);
   }

   
  }