'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
       // define association here
       Flight.belongsTo(models.Airline, {
         as : 'airline',
         foreignKey : 'airlineId'
       });
   }
   }
  Flight.init({
    date: DataTypes.DATE,
    departure: DataTypes.TIME,
    arrival: DataTypes.TIME,
    price: DataTypes.INTEGER,
    airlineId: DataTypes.INTEGER,
    productId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};