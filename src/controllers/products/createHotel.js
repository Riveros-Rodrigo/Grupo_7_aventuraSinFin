const db = require('../../database/models')

module.exports = async(req, res) => {
    
   try {
    const {hotelId,name,description,price,discount} = req.body

    await db.Product.create({
        hotelId : +hotelId,
        countryId: null,
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