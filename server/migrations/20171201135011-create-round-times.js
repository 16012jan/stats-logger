'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Round_Times', {
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
      round: {
        type: Sequelize.INTEGER
      },
      round_time: {
        type: Sequelize.DATE
      },
      TIM_distance: {
        type: Sequelize.DATE
      },
      TIM_clinch: {
        type: Sequelize.DATE
      },
      TIM_ground: {
        type: Sequelize.DATE
      },
      PC_clinch_control: {
        type: Sequelize.DATE
      },
      PC_ground_control: {
        type: Sequelize.DATE
      },
      TIS_orthodox: {
        type: Sequelize.DATE
      },
      TIS_southpaw: {
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
    return queryInterface.dropTable('Round_Times');
  }
};