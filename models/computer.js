'use strict';

module.exports = function(sequelize, DataTypes) {
  var computer = sequelize.define('computer', {
    purchase_date: DataTypes.DATE,
    decommission_date: DataTypes.DATE,
    serial_number: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING
  });

  computer.associate = models => {
    computer.belongsToMany(models.employee, {
      // as: 'assigned_computer',
      through: 'employees_computers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return computer;
};
