'use strict';

module.exports = function(sequelize, DataTypes) {
  var computer = sequelize.define('computer', {
    manufacturer: DataTypes.STRING,
    make: DataTypes.STRING,
    purchase_date: DataTypes.DATEONLY
  });

  computer.associate = models => {
    computer.belongsToMany(models.employee, {
      as: 'assigned_computer',
      through: 'employee_computer',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return computer;
};
