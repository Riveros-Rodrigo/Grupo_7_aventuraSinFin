'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "Countries",
      [
        {
          name: "Argentina",
          image: 'Argentina.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Francia",
          image: 'franciaEifel.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uruguay",
          image: 'uruguay.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brasil",
          image: 'brasil.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Perú",
          image: 'machupichu.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Panamá",
          image: 'HardRockPanamá.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Countries', null, {});
     
  }
};