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
      categoryId: {
        type: Sequelize.INTEGER,
        referencer : {
          model: {
            tableName:'Categories'
          }
        }
      },
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        referencer : {
          model: {
            tableName:'Countries'
          }
        }
      },
      hotelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        referencer : {
          model: {
            tableName:'Hotels'
          }
        }
      },
      flightId: {
        type: Sequelize.INTEGER,
        referencer : {
          model: {
            tableName:'Flights'
          }
        }
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
      packageId: {
        type: Sequelize.INTEGER
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