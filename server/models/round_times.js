'use strict';
module.exports = (sequelize, DataTypes) => {
  var Round_Times = sequelize.define('Round_Times', {
    fight_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Fight',
          key: 'id'
      }
    },
    round: DataTypes.INTEGER,
    round_time: DataTypes.DATE,
    TIM_distance: DataTypes.DATE,
    TIM_clinch: DataTypes.DATE,
    TIM_ground: DataTypes.DATE,
    PC_clinch_control: DataTypes.DATE,
    PC_ground_control: DataTypes.DATE,
    TIS_orthodox: DataTypes.DATE,
    TIS_southpaw: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Round_Times;
};