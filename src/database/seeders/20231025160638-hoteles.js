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
          countrieId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nueva Chicago",
          image: 'hotelNuevaChicago.webp',
          countrieId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hacienda EncantadaResort & Spa",
          image: 'HaciendaEncantadaResort&Spa.jpg',
          countrieId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thompson Hotel",
          image: 'ThompsonHotel.jpg',
          countrieId: 4,
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
