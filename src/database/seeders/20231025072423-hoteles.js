'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "Hotels",
      [
        {
          name: "Transilvania",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nueva Chicago",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Hotels', null, {});
     
  }
};
