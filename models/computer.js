'use strict';

module.exports = function(sequelize, DataTypes) {
  var Computer = sequelize.define('Computer', {
    purchase_date: DataTypes.DATEONLY
  });

  Computer.associate = models => {};

  return Computer;
};
