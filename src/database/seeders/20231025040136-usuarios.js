'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          surname: "Aventura_Sin_Fin",
          email: "admin@gmail.com",
          password:
          "$2a$10$Y/pM0ltIQnxowMnZjH5wguzwEoNyRwoK5G9TCS3v7m93UpVc7.sFW",
          rolId: 1,
          phone: null,
          gender: null,
          // seat: null,
          subscription: null,
          profilePhoto: null,
          birthday: null,
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: "User",
          surname: "Aventura_Sin_Fin",
          email: "user@gmail.com",
          password:
            "$2a$10$U/tlij0PL6xcudgkRrAQweHNK83AW5CiTQeBqoQpcU/rcbK9UuV5K",
            rolId: 2,
            phone: null,
            gender: null,
            // seat: null,
            subscription: null,
            profilePhoto: null,
            birthday: null,
          createdAt : new Date,
          updatedAt : new Date
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
