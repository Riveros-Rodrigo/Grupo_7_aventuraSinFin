'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Airlines",
      [
        {
          name: "KLM",
          image: "KLM.png",
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: "Iberia",
          image: "Iberia.png",
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: "GOL Linhas Aereas",
          image: "GOL Linhas Aereas.png",
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: "Aerolineas Argentinas",
          image: "Aerolineas Argentinas.png",
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: "LATAM",
          image: "LATAM.png",
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: "Jetsmart Airlines",
          image: "Jetsmart Airlines.png",
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: "Lufthansa",
          image: "Lufthansa.png",
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: "ITA Airways",
          image: "ITA Airways.png",
          createdAt : new Date,
          updatedAt : new Date
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airlines", null, {});
  },
};


