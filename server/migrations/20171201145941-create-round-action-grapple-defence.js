'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Round_Action_Grapple_Defences', {
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
      guard: {
        type: Sequelize.BOOLEAN
      },
      stand_up: {
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
    return queryInterface.dropTable('Round_Action_Grapple_Defences');
  }
};
