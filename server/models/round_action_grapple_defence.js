'use strict';
module.exports = (sequelize, DataTypes) => {
  const Round_Action_Grapple_Defence = sequelize.define('Round_Action_Grapple_Defence', {
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
    guard: DataTypes.BOOLEAN,
    stand_up: DataTypes.BOOLEAN,
    time: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        Round_Action_Grapple_Defence.belongsTo(Fighter);
        Round_Action_Grapple_Defence.belongsTo(Fight);
      }
    }
  });
  return Round_Action_Grapple_Defence;
};
