'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Fights', [{
       event_id: 1000,
       fighter_1_id: 1000,
       fighter_2_id: 2000,
       result: 'Win',
       round_ended: 2,
       round_ended_time: '2017-12-14 07:37:30',
       method: 'Method',
       technique: 'Technique',
       referee: 'Referee',
       championship: true,
       weight_class: 'Class',
       createdAt: '2017-12-14 07:37:30',
       updatedAt: '2017-12-14 07:37:30'
     }], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fights', null, {});
  }
};
