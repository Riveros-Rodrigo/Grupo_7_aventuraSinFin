const db = require("../../database/models");

module.exports = (req,res) => {
    const categories = db.Categorie.findAll();
    const products = db.Product.findAll({
        include : ['hotel','countrie','images'],
        where : {
            hotelId : req.query.hotel
        }
    });
    const hotels = db.Hotel.findAll({
        order : ['name']
    })

    Promise.all([categories,products, hotels])
        .then(([categories, products, hotels]) => {
            return res.render('dashboard', {
                products,
                categories,
                hotels,
                Hotel: req.query.brand
            })
        })
        .catch(error => console.log(error))
}