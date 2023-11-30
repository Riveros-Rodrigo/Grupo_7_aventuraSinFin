'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: 'vuelo a Paris',
          countryId: 5,
          hotelId: 11,
          description: 'Viaje a Paris all include',
          price: 1000,
          discount: 0,
          image: 'francia-banner.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'vuelo a Brasil',
          countryId: 6,
          hotelId: 10,
          description: 'Viaje a pais all include',
          price: 1000,
          discount: 0,
          image: 'img-banner.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'vuelo a Machupichu',
          countryId: 7,
          hotelId: 9,
          description: 'Tu Viaje soñado a Mchupichu all include',
          price: 1000,
          discount: 0,
          image: 'machupichu.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'vuelo a Panamá',
          countryId: 8,
          hotelId: 8,
          description: 'Viaje a Panamá con estadía en el hotel Hard Rock',
          price: 1000,
          discount: 0,
          image: 'HardRockPanamá.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};


