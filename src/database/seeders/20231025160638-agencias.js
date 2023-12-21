'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "Agencies",
      [
        {
          name: "Despegar",
          image : "Despegar.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Booking",
          image : "Booking.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hoteles",
          image : "Hoteles.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Expedia",
          image : "Expedia.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
       
      ],
    );
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Agencies', null, {});
     
  }
};
