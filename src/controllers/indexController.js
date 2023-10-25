// const {readJSON} = require('../data')
// const products = readJSON('products.json');

// module.exports = {
//     index : (req, res) => {
//         return res.render('index', {
//           products,
//         });
//       },
//     search: (req, res) => {
//       const keywords = req.query.keywords
//       const results= products.filter(product => product.countrie.toLowerCase().includes(keywords.toLowerCase()))
//       res.render('results',{
//         products,
//         results,
//         keywords
//       })
//     },
//     dashboard : (req,res) => {
//       const {categorie} = req.params
//       const products = readJSON('products.json');
//       let categoryDefault = 'pais'

//       if(category) {
//         categoryDefault = category
//       }
      
//       const productsFilter = products.filter((p) =>  categoryDefault === p.category)
 
//       return res.render('dashboard', {
//           products: productsFilter,
//           categorySelected:categoryDefault
//       })
//   },
//   vuelos : (req, res) => {
//     return res.render('vuelos', {
//       products,
//     });
//   },
//   hotels : (req, res) => {
//     return res.render('hotels', {
//       products,
//     });
//   }
// }

const db = require("../database/models");

module.exports = {
  index: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      return res.render('index', {
        products,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
    }
  },

  search: async (req, res) => {
    try {
      const keywords = req.query.keywords;
      const results = await db.Product.findAll({
        where: {
          [db.Sequelize.Op.or]: [
            { countrie: { [db.Sequelize.Op.iLike]: `%${keywords}%` } },
            { '$categories.name$': { [db.Sequelize.Op.iLike]: `%${keywords}%` } }
          ]
        },
        include: [{
          model: db.categories,
        }]
      });

      return res.render('results', {
        products: results,
        keywords,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
    }
  },

  dashboard: async (req, res) => {
    try {
      const { categorie } = req.params;
      const categorieDefault = categorie || 'pais';

      const productsFilter = await db.Product.findAll({
        include: [{
          model: db.categories,
          where: { name: categorieDefault }
        }]
      });

      return res.render('dashboard', {
        products: productsFilter,
        categorieSelected: categorieDefault
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
    }
  },

  vuelos: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      return res.render('vuelos', {
        products,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
    }
  },

  hotels: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      return res.render('hotels', {
        products,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
    }
  }
};


