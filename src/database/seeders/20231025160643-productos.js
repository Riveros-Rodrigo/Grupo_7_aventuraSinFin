'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: 'París, la ciudad de las luces',
          countryId: 2,
          hotelId: null,
          description: 'Paris es un lugar de ensueño. Es un lugar que tiene historia y buenos momentos en cada esquina. Es algo más que la Torre Eiffel y el Arco del Triunfo. Paris es historia y buenos momentos. Es un lugar detenido en el tiempo, digno de visitar nuevamente',
          price: 120000,
          discount: 0,
          image: 'francia-banner.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Río de Janeiro, tierra del carnaval',
          countryId: 4,
          hotelId: null,
          description: 'Viví momentos únicos en la Ciudad Maravillosa. Relajate en sus largas playas de arena blanca y aguas transparentes. Disfruta las vistas desde el Corcovado y el Pan de Azúcar, además de conectarte con la cultura local en barrios como Urca y Santa Teresa. Y si te gusta el fútbol, ¡no podés perderte una visita al Maracaná!',
          price: 800000,
          discount: 0,
          image: 'Rio_de_Janeiro.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Cusco, capital del imperio Inca',
          countryId: 5,
          hotelId: null,
          description: 'Cusco es el destino perfecto para una aventura llena de historia y escenarios de película. Recorré los atractivos de esta ciudad, declarada Patrimonio de la Humanidad por la UNESCO y uno de los destinos más visitados de Sudamérica.Vas a elegir entre visitar la hermosa Laguna de Humantay, desafiar tus límites en la Montaña Arco Iris o caminar por la increíble ciudad de Machu Picchu. ¡Vení a descubrir la capital del Imperio Inca!',
          price: 500000,
          discount: 0,
          image: 'MachuPicchu.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Roma, un museo a cielo abierto',
          countryId: 6,
          hotelId: null,
          description: 'Caminar por Roma es como estar caminando por un museo, sus plazas, sus fuentes, sus ruinas, su Coliseo que siglos atrás era testigo de luchas interminables por los entonces llamados gladiadores romanos. Pasear por sus calles, es pasear por miles de años de historia.',
          price: 130000,
          discount: 0,
          image: 'roma.jpg',
          createdAt : new Date,
          updatedAt : new Date
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};


