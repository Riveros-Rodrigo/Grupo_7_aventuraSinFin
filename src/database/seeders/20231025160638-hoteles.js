'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "Hotels",
      [
        {
          name: "Transilvania",
          image: 'hotelTransilvania.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nueva Chicago",
          image: 'hotelNuevaChicago.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hacienda EncantadaResort & Spa",
          image: 'HaciendaEncantadaResort&Spa.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thompson Hotel",
          image: 'ThompsonHotel.jpg',
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
