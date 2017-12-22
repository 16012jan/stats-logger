'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Round_Action_Grapples', 'techique', 'technique')
    queryInterface.renameColumn('Round_Action_Grapples', 'submission_attempt', 'submission_secured')
    return queryInterface.removeColumn('Round_Action_Grapples', 'competency')
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Round_Action_Grapples', 'competency')
    return queryInterface.renameColumn('Round_Action_Grapples', 'submission_secured', 'submission_attempt')
  }
};
