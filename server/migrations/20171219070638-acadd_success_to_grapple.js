'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Round_Action_Grapples', 'success', { type: Sequelize.BOOLEAN })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Round_Action_Grapples', 'success')
  }
};
