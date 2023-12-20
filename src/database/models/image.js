'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
       // define association here
       Image.belongsTo(models.Hotel, {
         as : 'hotel',
         foreignKey : 'hotelId'
       });

     Image.belongsTo(models.Countrie, {
       as : 'countrie',
       foreignKey : 'countryId'
     })
   }
   }
  Image.init({
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    hotelId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};