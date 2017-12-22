'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
       id: 1000,
       event_name: 'Big Event',
       venue_name: 'Arena',
       event_date: '2017-12-14 07:37:30',
       createdAt: '2017-12-14 07:37:30',
       updatedAt: '2017-12-14 07:37:30'
     }
   ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
