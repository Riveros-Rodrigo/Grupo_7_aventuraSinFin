'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Flights",
      [
        { //paris
          date: '2024-01-23',
          departure: "09:00",
          arrival: "23:00",
          airlineId: 1,
          productId: 1,
          price: 1300,
          createdAt : new Date,
          updatedAt : new Date
        },
        { 
          date: '2023-12-25',
          departure: "09:00",
          arrival: "23:00",
          airlineId: 2,
          productId: 1,
          price: 2300,
          createdAt : new Date,
          updatedAt : new Date
        },
        { //rio de janeiro
          date: '2024-03-23',
          departure: "07:00",
          arrival: "09:00",
          airlineId: 3,
          productId: 2,
          price: 300,
          createdAt : new Date,
          updatedAt : new Date
        },
        { 
          date: '2024-01-20',
          departure: "16:00",
          arrival: "18:00",
          airlineId: 4,
          productId: 2,
          price: 400,
          createdAt : new Date,
          updatedAt : new Date
        },
        {//cusco
          date: '2024-02-23',
          departure: "10:00",
          arrival: "17:00",
          airlineId: 5,
          productId: 3,
          price: 800,
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          date: '2024-01-10',
          departure: "10:00",
          arrival: "17:00",
          airlineId: 6,
          productId: 3,
          price: 1000,
          createdAt : new Date,
          updatedAt : new Date
        },
        {//roma
          date: '2024-04-23',
          departure: "04:00",
          arrival: "16:00",
          airlineId: 7,
          productId: 4,
          price: 1100,
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          date: '2024-01-10',
          departure: "06:00",
          arrival: "20:00",
          airlineId: 8,
          productId: 4,
          price: 1500,
          createdAt : new Date,
          updatedAt : new Date
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Flights", null, {});
  },
};


