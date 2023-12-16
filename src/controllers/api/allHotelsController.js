const db = require("../../database/models");

const getAllHotels = async(req,res) => {
    try {
        const hotels = await db.Hotel.findAll();

        const hotelWithImage = hotels.map(hotel =>{
            hotel.image = hotel.image ?  `${req.protocol}://${req.get('host')}/images/${hotel.image}` : null;
        
    
            return hotel
        });

        return res.status(200).json({
            ok: true,
            data: hotelWithImage,
            count: hotelWithImage.length
        });  

    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "No se pudo traer el hotel",
          });
    }
};

module.exports = getAllHotels;