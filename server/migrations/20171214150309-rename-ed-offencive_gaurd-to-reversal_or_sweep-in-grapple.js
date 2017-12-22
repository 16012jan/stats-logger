'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Round_Action_Grapples', 'offencive_gaurd', 'reversal_or_sweep')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Round_Action_Grapples', 'reversal_or_sweep', 'offencive_gaurd')
  }
};
