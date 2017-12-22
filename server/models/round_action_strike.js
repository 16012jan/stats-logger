'use strict';
module.exports = (sequelize, DataTypes) => {
  const Round_Action_Strike = sequelize.define('Round_Action_Strike', {
    fight_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Fight',
            key: 'id'
        }
    },
    fighter_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Fighter',
            key: 'id'
        }
    },
    stance: DataTypes.STRING,
    method: DataTypes.STRING,
    source: DataTypes.STRING,
    target: DataTypes.STRING,
    position: DataTypes.STRING,
    strategy: DataTypes.STRING,
    attempt: DataTypes.BOOLEAN,
    competency: DataTypes.STRING,
    optimal: DataTypes.BOOLEAN,
    critical: DataTypes.BOOLEAN,
    knock_down: DataTypes.BOOLEAN,
    illegal: DataTypes.STRING,
    time: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Round_Action_Strike;
};
