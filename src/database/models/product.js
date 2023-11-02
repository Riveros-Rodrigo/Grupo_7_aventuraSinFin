'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
       // define association here
       Product.belongsTo(models.Hotel, {
         as : 'hotel',
         foreignKey : 'hotelId'
       });
     Product.belongsTo(models.Flight, {
       as : 'flight',
       foreignKey : 'flightId'
     });

     Product.belongsTo(models.Package, {
       as : 'package',
       foreignKey : 'packageId'
     });
     Product.belongsTo(models.Categorie, {
       as : 'categorie',
       foreignKey : 'categoryId'
     });

     Product.belongsTo(models.Countries, {
       as : 'countrie',
       foreignKey : 'countryId'
     });

     Product.hasMany(models.Image, {
       as : 'images',
       foreignKey : 'productId'
     })
   }
   }
  Product.init({
    categoryId: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    hotelId: DataTypes.INTEGER,
    flightId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    packageId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};