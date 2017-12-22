'use strict';

module.exports = {
  //  Default fighter
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fighters', [
      {
       id: 1000,
       name: 'Nacho Libre',
       dob: '2017-12-14 07:37:30',
       gender: 'male',
       country: 'Mexico',
       height: 170,
       weight: 100,
       arm_reach: 150,
       leg_reach: 150,
       createdAt: '2017-12-14 07:37:30',
       updatedAt: '2017-12-14 07:37:30'
     },
     {
      id: 2000,
      name: 'Vitaliy Klichko',
      dob: '2017-12-14 07:37:30',
      gender: 'male',
      country: 'Ukraine',
      height: 170,
      weight: 100,
      arm_reach: 150,
      leg_reach: 150,
      createdAt: '2017-12-14 07:37:30',
      updatedAt: '2017-12-14 07:37:30'
    }
   ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fighters', null, {});
  }
};
