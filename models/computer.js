'use strict';

module.exports = function(sequelize, DataTypes) {
  var Computer = sequelize.define('Computer', {
    manufacturer: DataTypes.STRING,
    make: DataTypes.STRING,
    purchase_date: DataTypes.DATEONLY
  });

  Computer.associate = models => {};

  return Computer;
};
