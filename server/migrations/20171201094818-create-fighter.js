'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fighters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      dob: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.INTEGER,
        validate: { min: 0, max: 300 }
      },
      weight: {
        type: Sequelize.INTEGER,
        validate: { min: 0, max: 300 }
      },
      arm_reach: {
        type: Sequelize.INTEGER,
        validate: { min: 0, max: 200 }
      },
      leg_reach: {
        type: Sequelize.INTEGER,
        validate: { min: 0, max: 200 }
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
    return queryInterface.dropTable('Fighters');
  }
};