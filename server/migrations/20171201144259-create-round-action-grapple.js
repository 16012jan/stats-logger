'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Round_Action_Grapples', {
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
      takedown_attempt: {
        type: Sequelize.STRING
      },
      competency: {
        type: Sequelize.STRING
      },
      slam: {
        type: Sequelize.BOOLEAN
      },
      pass: {
        type: Sequelize.BOOLEAN
      },
      offencive_gaurd: {
        type: Sequelize.BOOLEAN
      },
      submission_attempt: {
        type: Sequelize.STRING
      },
      techique: {
        type: Sequelize.STRING
      },
      finish: {
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
    return queryInterface.dropTable('Round_Action_Grapples');
  }
};