'use strict';

const vuelosJSON = require('../../data/products.json');
const vuelosDB = vuelosJSON.map((vuelo,index) =>{
  return{
    name : vuelo.country,
    product_id: index + 1,
    createdAt : new Date,
    updatedAt: new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Countries',vuelosDB, {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Countries', null, {});

  }
};
