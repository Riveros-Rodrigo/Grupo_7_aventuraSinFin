const fs = require('fs');
const path = require('path');

const productsRouting = path.join(__dirname, '../data/products.json');
const hotelsRouting = path.join(__dirname, '../data/hotels.json');
const products = JSON.parse(fs.readFileSync(productsRouting, 'utf-8'));
const hotels = JSON.parse(fs.readFileSync(hotelsRouting, 'utf-8'));

module.exports = {
    index : (req, res) => {
        return res.render('index', {
          products,
          hotels
        });
      },
    search: (req, res) => {
      const keywords = req.query.keywords
      const results= products.filter(product => product.country.toLowerCase().includes(keywords.toLowerCase()))
      res.render('results',{
        products,
        results,
        keywords
      })
    }
}