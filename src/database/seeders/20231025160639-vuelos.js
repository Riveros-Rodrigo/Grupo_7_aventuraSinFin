'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "Flights",
      [
        {
          require: true,
          name: "Clara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          require: false,
          name: "Rodrigo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Flights', null, {});
     
  }
};

