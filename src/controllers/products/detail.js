const { readJSON } = require("../../data");

module.exports = (req, res) => {
    
    const products = readJSON("products.json");
    const hotels = readJSON("hotels.json");
    
    const id = parseInt(req.params.id); 
    const product = products.find((product) => product.id === id);
    const hotel = hotels.find((hotel) => hotel.id === id);

    return res.render("productDetail", {
        ...product,
        ...hotel
    });
};
