const {readJSON} = require('../data')
const products = readJSON('products.json');

module.exports = {
    index : (req, res) => {
        return res.render('index');
      }
}