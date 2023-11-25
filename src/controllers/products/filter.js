const db = require("../../database/models");

module.exports = (req,res) => {
    const countries = db.Countries.findAll();
    const products = db.Product.findAll({
        include : ['hotel','countrie'/*,'images'*/],
        where : {
            hotelId : req.query.hotel
        }
    });
    const hotels = db.Hotel.findAll({
        order : ['name']
    })

    Promise.all([products, hotels])
        .then(([products, hotels]) => {
            return res.render('dashboard', {
                products,
                hotels,
                Hotel: req.query.countries
            })
        })
        .catch(error => console.log(error))
}