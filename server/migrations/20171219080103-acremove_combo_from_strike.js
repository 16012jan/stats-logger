'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Round_Action_Strikes', 'combo')
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Round_Action_Strikes', 'combo')
  }
};
