'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Events',
            key: 'id'
        }
      },
      fighter_1_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Fighters',
            key: 'id'
        }
      },
      fighter_2_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Fighters',
            key: 'id'
        }
      },
      result: {
        type: Sequelize.STRING
      },
      round_ended: {
        type: Sequelize.INTEGER
      },
      round_ended_time: {
        type: Sequelize.DATE
      },
      method: {
        type: Sequelize.STRING
      },
      technique: {
        type: Sequelize.STRING
      },
      referee: {
        type: Sequelize.STRING
      },
      championship: {
        type: Sequelize.BOOLEAN
      },
      weight_class: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Fights');
  }
};