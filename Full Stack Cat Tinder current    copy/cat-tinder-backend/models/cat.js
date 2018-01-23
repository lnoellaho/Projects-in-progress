'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cat = sequelize.define('Cat', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    age: DataTypes.INTEGER,
    enjoys: DataTypes.TEXT,
    views: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cat;
};
