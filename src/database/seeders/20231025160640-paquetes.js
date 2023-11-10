'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "Packages",
      [
        {
          name: "Estadía en Transilvania con vuelos ida y vuelta por 7 días y 6 noches",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Estadía en Nueva Chicago con vuelos ida y vuelta por 7 días y 6 noches",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Packages', null, {});
     
  }
};

