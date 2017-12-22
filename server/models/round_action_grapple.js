'use strict';
module.exports = (sequelize, DataTypes) => {
  const Round_Action_Grapple = sequelize.define('Round_Action_Grapple', {
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
    takedown_attempt: DataTypes.STRING,
    success: DataTypes.BOOLEAN,
    slam: DataTypes.BOOLEAN,
    pass: DataTypes.BOOLEAN,
    reversal_or_sweep: DataTypes.BOOLEAN,
    submission_secured: DataTypes.STRING,
    technique: DataTypes.STRING,
    finish: DataTypes.BOOLEAN,
    time: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Round_Action_Grapple;
};
