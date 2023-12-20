'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: 'París, la ciudad de las luces',
          city: "Paris",
          countryId: 2,
          lodging: false,
          description: 'Paris es un lugar de ensueño. Es un lugar que tiene historia y buenos momentos en cada esquina. Es algo más que la Torre Eiffel y el Arco del Triunfo. Paris es historia y buenos momentos. Es un lugar detenido en el tiempo, digno de visitar nuevamente',
          phone: null,
          address:null,
          image: 'francia-banner.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Río de Janeiro, tierra de carnaval',
          city: "Río de Janeiro",
          countryId: 4,
          lodging: false,
          description: 'Viví momentos únicos en la Ciudad Maravillosa. Relajate en sus largas playas de arena blanca y aguas transparentes. Disfruta las vistas desde el Corcovado y el Pan de Azúcar, además de conectarte con la cultura local en barrios como Urca y Santa Teresa. Y si te gusta el fútbol, ¡no podés perderte una visita al Maracaná!',
          phone: null,
          address:null,
          image: 'Rio_de_Janeiro.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Cusco, capital del imperio Inca',
          city: "Cusco",
          countryId: 5,
          lodging: false,
          description: 'Cusco es el destino perfecto para una aventura llena de historia y escenarios de película. Recorré los atractivos de esta ciudad, declarada Patrimonio de la Humanidad por la UNESCO y uno de los destinos más visitados de Sudamérica.Vas a elegir entre visitar la hermosa Laguna de Humantay, desafiar tus límites en la Montaña Arco Iris o caminar por la increíble ciudad de Machu Picchu. ¡Vení a descubrir la capital del Imperio Inca!',
          phone: null,
          address:null,
          image: 'MachuPicchu.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Roma, un museo a cielo abierto',
          city: "Roma",
          countryId: 6,
          lodging: false,
          description: 'Caminar por Roma es como estar caminando por un museo, sus plazas, sus fuentes, sus ruinas, su Coliseo que siglos atrás era testigo de luchas interminables por los entonces llamados gladiadores romanos. Pasear por sus calles, es pasear por miles de años de historia.',
          phone: null,
          address:null,
          image: 'roma.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Hotel Peyris Opera',
          city: "Paris",
          countryId: 2,
          lodging: true,
          description: 'Este hotel moderno se encuentra a 5 minutos a pie de la estación de metro Cadet, a 7 minutos del museo de cera Musée Grévin y a 14 minutos de la estación de tren Gare du Nord.',
          phone: "+33 1 47 70 50 83",
          address:"10 Rue du Conservatoire, 75009 Paris, Francia",
          image: 'hotel_paris_1_0.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Copacabana Design Hotel',
          city: "Río de Janeiro",
          countryId: 4,
          lodging: true,
          description: 'Este hotel elegante ubicado en una calle con restaurantes está a 1 minuto a pie de la estación de metro más cercana, a 1 km de la playa de Copacabana y a 4 km del teleférico al Pan de Azúcar.',
          phone: "+55 21 3609-3500",
          address: "R. Barata Ribeiro, 173 - Copacabana, Rio de Janeiro - RJ, 22011-001, Brasil",
          image: 'hotel_rio_0.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Hilton Garden Inn Cusco',
          city: "Cusco",
          countryId: 5,
          lodging: true,
          description: 'Ubicado en un edificio de estilo colonial, este refinado hotel con vistas a la montaña se encuentra a 13 minutos a pie de los jardines y la catedral en la animada Plaza de Armas, y a 2 km de las ruinas del templo inca del siglo XV, Qurikancha.',
          phone: "+51 84 580130",
          address:"Av. Abancay 207, Cusco 00000, Perú",
          image: 'hotel_cusco_0.jpg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name: 'Hotel Demetra Capitolina Roma',
          city: "Roma",
          countryId: 6,
          lodging: true,
          description: 'Este hotel económico, que ocupa un edificio histórico, se encuentra en una calle concurrida, a 3 minutos a pie de la estación de Roma Termini y a 2 km del Coliseo y de la emblemática Fontana di Trevi.',
          phone: "+39 06 474 5428",
          address:"Via Principe Amedeo, 58, 00185 Roma RM, Italia",
          image: 'hotel_roma_0.jpg',
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


