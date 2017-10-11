'use strict';

module.exports = function(sequelize, DataTypes) {
  var Computer = sequelize.define(
    'Computer',
    {
      manufacturer: DataTypes.STRING,
      make: DataTypes.STRING,
      purchase_date: DataTypes.DATEONLY,
      created_at: DataTypes.STRING,
      updated_at: DataTypes.STRING
    },
    {
      underscored: true
    }
  );

  Computer.associate = models => {};

  return Computer;
};
