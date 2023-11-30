'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: {
            tableName:'Countries'
          }
        }
      },
      hotelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: {
            tableName:'Hotels'
          }
        }
      },
    
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED,
      },

      image: {
        type: Sequelize.STRING
      },
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};