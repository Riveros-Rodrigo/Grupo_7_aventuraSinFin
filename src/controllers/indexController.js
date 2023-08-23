const fs = require('fs');
const path = require('path');

const productsRouting = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsRouting, 'utf-8'));

module.exports = {
    index : (req, res) => {
        return res.render('index');
      },
    search: (req, res) => {
      const keywords = req.query.keywords
      const results= products.filter(product => product.place.toLowerCase().includes(keywords.toLowerCase()))
      res.render('results',{
        results,
        keywords
      })
    }
}