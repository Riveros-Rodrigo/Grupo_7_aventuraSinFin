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
        references : {
          model: {
            tableName:'Categories'
          }
        }
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
      flightId: {
        type: Sequelize.INTEGER,
        references : {
          model: {
            tableName:'Flights'
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
      packageId: {
        type: Sequelize.INTEGER,
        references : {
          model: {
            tableName:'Packages'
          }
        }
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