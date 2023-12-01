'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: 'Vuelo a Paris',
          countryId: 2,
          hotelId: null,
          description: 'Viaje a Paris all include',
          price: 1000,
          discount: 0,
          image: 'francia-banner.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Vuelo a Brasil',
          countryId: 4,
          hotelId: null,
          description: 'Viaje a pais all include',
          price: 1000,
          discount: 0,
          image: 'brasil.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Vuelo a Machupichu',
          countryId: 5,
          hotelId: null,
          description: 'Tu Viaje soñado a Machupichu all include',
          price: 1000,
          discount: 0,
          image: 'machupichu.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Vuelo a Panamá',
          countryId: 6,
          hotelId: null,
          description: 'Viaje a Panamá con estadía en el hotel Hard Rock',
          price: 1000,
          discount: 0,
          image: 'HardRockPanamá.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: '3 días y 2 noches en París',
          countryId: null,
          hotelId: 1,
          description: 'Desayuno incluido',
          price: 1000,
          discount: 0,
          image: 'francia-banner.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: '3 días y 2 noches en Río de Janeiro',
          countryId: null,
          hotelId: 2,
          description: 'Desayuno incluido',
          price: 1000,
          discount: 0,
          image: 'brasil.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Noches misteriosas incaicas',
          countryId: null,
          hotelId: 3,
          description: 'Desayuno incluido',
          price: 1000,
          discount: 0,
          image: 'machupichu.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: '3 noches en el Pacífico',
          countryId: null,
          hotelId: 4,
          description: 'Desayuno incluido',
          price: 1000,
          discount: 0,
          image: 'HardRockPanamá.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Viaje y estadía familiar',
          countryId: 1,
          hotelId: 1,
          description: 'Vuelo directo con estadía 5 estrellas',
          price: 1000,
          discount: 0,
          image: 'francia-banner.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Viaje en solitario',
          countryId: 2,
          hotelId: 2,
          description: 'Incluye visita a las pirámies Gizeh',
          price: 1000,
          discount: 0,
          image: 'brasil.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Stoneage Day',
          countryId: 3,
          hotelId: 3,
          description: 'Tour místico',
          price: 1000,
          discount: 0,
          image: 'machupichu.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Isla de Pascua',
          countryId: 4,
          hotelId: 4,
          description: 'Los Moai que no se mueven',
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


