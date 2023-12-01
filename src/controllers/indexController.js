const db = require("../database/models");

module.exports = {
  index: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include : ['hotel','countrie']
      });
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
          model: db.Categorie,
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
      const products = await db.Product.findAll({
        include : [
        {
          association : 'hotel',
          include : ['countrie']

        },
        {
          association : 'countrie'
        }
      ]
      });
  
      return res.render('dashboard', {
        products,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
    }
  },
  
  vuelos: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include : ['countrie','hotel']
      });
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
      const products = await db.Product.findAll({
        include : ['countrie','hotel']
      });
      return res.render('hotels', {
        products,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
    }
  }
};
