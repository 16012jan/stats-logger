'use strict';
module.exports = (sequelize, DataTypes) => {
  const Round_Action_Strike_Defence = sequelize.define('Round_Action_Strike_Defence', {
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
    method: DataTypes.STRING,
    position: DataTypes.STRING,
    time: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Round_Action_Strike_Defence;
};
