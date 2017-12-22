'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Round_Action_Strikes', 'illegal', Sequelize.STRING)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Round_Action_Strikes', 'illegal', Sequelize.BOOLEAN)
  }
};
