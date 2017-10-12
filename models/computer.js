'use strict';

module.exports = function(sequelize, DataTypes) {
  var computer = sequelize.define('computer', {
    purchase_date: DataTypes.DATEONLY,
    decommission_date: DataTypes.DATEONLY,
    serial_number: DataTypes.STRING
  });

  computer.associate = models => {
    computer.belongsToMany(models.employee, {
      as: 'assigned_computer',
      through: 'employees_computers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return computer;
};
