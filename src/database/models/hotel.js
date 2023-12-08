'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hotel.belongsTo(models.Countrie, {
        as : 'countrie',
        foreignKey : 'countrieId'
      })
    }
  }
  Hotel.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    countrieId: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};