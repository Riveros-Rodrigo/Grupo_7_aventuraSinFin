const { v4: uuidv4 } = require('uuid');

const Product = function({ country,category, hotel, flight, description, price, discount, image }) {
    this.id = uuidv4();
    this.country = country ? country.trim() : ''; // Comprobación de nulidad y asignación predeterminada
    this.category = category ? category.trim() : ''; // Comprobación de nulidad y asignación predeterminada
    this.hotel = hotel;
    this.flight = flight;
    this.description = description ? description.trim() : ''; // Comprobación de nulidad y asignación predeterminada
    this.price = +price;
    this.discount = +discount; //lo del descuento lo agregamos para un futuro, por ahora no lo tiene
    this.image = image;
    this.createdAt = new Date();
};

module.exports = Product;