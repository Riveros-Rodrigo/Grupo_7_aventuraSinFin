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
  

     Product.belongsTo(models.Countrie, {
        as : 'countrie',
        foreignKey : 'countryId'
     })
     Product.belongsTo(models.Hotel, {
        as: 'hotel', 
        foreignKey: 'countryId' 
      });
     Product.hasMany(models.Flight, {
      as : 'flights',
      foreignKey : 'productId'
     })
   }
   }
  Product.init({
    name: DataTypes.STRING,
    city : DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    lodging: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    address: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};