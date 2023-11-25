'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: 'vuelo a Paris',
          countryId: 1,
          hotelId: 1,
          description: 'Viaje a pais all include',
          price: 1000,
          discount: 0,
          image: 'francia-banner.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'vuelo a Brasil',
          countryId: 1,
          hotelId: 1,
          description: 'Viaje a pais all include',
          price: 1000,
          discount: 0,
          image: 'img-banner.jpg',
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


