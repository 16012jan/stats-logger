'use strict';

module.exports = (sequelize, DataTypes) => {
  const Fight = sequelize.define('Fight', {
    event_id:{
      type: DataTypes.INTEGER,
      references: {
          model: 'Event',
          key: 'id'
      }
    },
    fighter_1_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Fighter',
        key: 'id'
      }
    },
    fighter_2_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Fighter',
        key: 'id'
      }
    },
    result: DataTypes.STRING,
    round_ended: DataTypes.INTEGER,
    round_ended_time: DataTypes.TIME,
    method: DataTypes.STRING,
    technique: DataTypes.STRING,
    referee: DataTypes.STRING,
    championship: DataTypes.BOOLEAN,
    weight_class: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Fight.hasMany(Round_Action_Strike, {foreignKey: fight_id, onDelete: 'CASCADE'});
        Fight.hasMany(Round_Action_Strike_Defence, {foreignKey: fight_id, onDelete: 'CASCADE'});
        Fight.hasMany(Round_Action_Grapple, {foreignKey: fight_id, onDelete: 'CASCADE'});
        Fight.hasMany(Round_Action_Grapple_Defence, {foreignKey: fight_id, onDelete: 'CASCADE'});
      }
    }
  });
  return Fight;
};
