'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Round_Action_Strike_Defences', 'time', Sequelize.TIME)
    queryInterface.changeColumn('Round_Action_Grapples', 'time', Sequelize.TIME)
    queryInterface.changeColumn('Round_Action_Grapple_Defences', 'time', Sequelize.TIME)
    queryInterface.changeColumn('Round_Action_Strikes', 'time', Sequelize.TIME)
    queryInterface.changeColumn('Fights', 'round_ended_time', Sequelize.TIME)
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Round_Action_Strike_Defences', 'time', Sequelize.DATE)
    queryInterface.changeColumn('Round_Action_Grapples', 'time', Sequelize.DATE)
    queryInterface.changeColumn('Round_Action_Grapple_Defences', 'time', Sequelize.DATE)
    queryInterface.changeColumn('Round_Action_Strikes', 'time', Sequelize.DATE)
    queryInterface.changeColumn('Fights', 'round_ended_time', Sequelize.DATE)
  }
};
