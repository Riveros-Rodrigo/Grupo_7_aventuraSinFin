'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paquete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
       // define association here
       Paquete.belongsTo(models.Hotel, {
         as : 'hotel',
         foreignKey : 'hotelId'
       });

     Paquete.belongsTo(models.Countrie, {
       as : 'countrie',
       foreignKey : 'countryId'
     })
   }
   }
  Paquete.init({
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    hotelId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paquete',
  });
  return Paquete;
};