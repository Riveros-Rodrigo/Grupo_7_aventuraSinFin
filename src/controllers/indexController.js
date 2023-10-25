const {readJSON} = require('../data')
const products = readJSON('products.json');

module.exports = {
    index : (req, res) => {
        return res.render('index', {
          products,
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
    },
    dashboard : (req,res) => {
      const {category} = req.params
      const products = readJSON('products.json');
      let categoryDefault = 'pais'

      if(category) {
        categoryDefault = category
      }
      
      const productsFilter = products.filter((p) =>  categoryDefault === p.category)
 
      return res.render('dashboard', {
          products: productsFilter,
          categorySelected:categoryDefault
      })
  },
  vuelos : (req, res) => {
    return res.render('vuelos', {
      products,
    });
  },
  hotels : (req, res) => {
    return res.render('hotels', {
      products,
    });
  }
}