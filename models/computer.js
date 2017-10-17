'use strict';

module.exports = function(sequelize, DataTypes) {
  var computer = sequelize.define('computer', {
    purchase_date: DataTypes.DATE,
    decommission_date: DataTypes.DATE,
    serial_number: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING
  });
  /**
   *  computers and employees tables have many to many relationships and are associated through the employee-computer join table
   */
  computer.associate = models => {
    computer.belongsToMany(models.employee, {
      through: 'employees_computers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return computer;
};
