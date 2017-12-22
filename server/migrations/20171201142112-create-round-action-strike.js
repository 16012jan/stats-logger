'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Round_Action_Strikes', {
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
      combo: {
        type: Sequelize.INTEGER
      },
      stance: {
        type: Sequelize.STRING
      },
      method: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      strategy: {
        type: Sequelize.STRING
      },
      attempt: {
        type: Sequelize.BOOLEAN
      },
      competency: {
        type: Sequelize.STRING
      },
      optimal: {
        type: Sequelize.BOOLEAN
      },
      critical: {
        type: Sequelize.BOOLEAN
      },
      knock_down: {
        type: Sequelize.BOOLEAN
      },
      illegal: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Round_Action_Strikes');
  }
};