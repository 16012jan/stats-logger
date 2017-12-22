'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fighter = sequelize.define('Fighter', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    dob: DataTypes.DATE,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate: { min: 0, max: 300 }
    },
    weight:  {
        type: DataTypes.INTEGER,
        validate: { min: 0, max: 300 }
    },
    arm_reach: {
        type: DataTypes.INTEGER,
        validate: { min: 0, max: 200 }
    },
    leg_reach: {
        type: DataTypes.INTEGER,
        validate: { min: 0, max: 200 }
    },
  }, {
    classMethods: {
      associate: function(models) {
        Fighter.hasMany(Round_Action_Strike, {foreignKey: fight_id, onDelete: 'CASCADE'});
        Fighter.hasMany(Round_Action_Strike_Defence, {foreignKey: fight_id, onDelete: 'CASCADE'});
        Fighter.hasMany(Round_Action_Grapple, {foreignKey: fight_id, onDelete: 'CASCADE'});
        Fighter.hasMany(Round_Action_Grapple_Defence, {foreignKey: fight_id, onDelete: 'CASCADE'});
      }
    }
  });
  return Fighter;
};
