'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Round_Action_Strike_Defences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fight_id: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Fights',
              key: 'id'
          }
      },
      fighter_id: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Fighters',
              key: 'id'
          }
      },
      stance: {
        type: Sequelize.STRING
      },
      method: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Round_Action_Strike_Defences');
  }
};
