'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Round_Action_Strike_Defences', 'stance')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Round_Action_Strike_Defences', 'stance', { type: Sequelize.STRING })
  }
};
