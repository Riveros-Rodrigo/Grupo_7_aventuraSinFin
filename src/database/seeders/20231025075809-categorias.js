'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Hotels",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Flights",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Packages",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};

