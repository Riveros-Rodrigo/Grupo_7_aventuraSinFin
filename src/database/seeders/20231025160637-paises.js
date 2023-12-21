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
          flag : null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Francia",
          image: null,
          flag : 'flag_francia.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uruguay",
          image: 'uruguay.jpg',
          flag : null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brasil",
          image: null,
          flag : 'flag_brasil.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Perú",
          image: null,
          flag : 'flag_peru.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italia",
          image: null,
          flag : 'flag_italia.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italia",
          image: null,
          flag : 'flag_italia.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Japon",
          image: null,
          flag : 'flag_japon.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "USA",
          image: null,
          flag : 'flag_estados-unidos.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "México",
          image: null,
          flag : 'flag_mexico.png',
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