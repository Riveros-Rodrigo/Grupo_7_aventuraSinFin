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
          description: 'Hotel con buenas vistas',
          price: 1000,
          discount: 0,
          countrieId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nueva Chicago",
          image: 'hotelNuevaChicago.webp',
          description: 'Hotel con hermosas vistas',
          price: 1000,
          discount: 0,
          countrieId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hacienda EncantadaResort & Spa",
          image: 'HaciendaEncantadaResort&Spa.jpg',
          description: 'Hotel con lindas vistas',
          price: 1000,
          discount: 0,
          countrieId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thompson Hotel",
          image: 'ThompsonHotel.jpg',
          description: 'Hotel con bellas vistas',
          price: 1000,
          discount: 0,
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
