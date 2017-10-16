'use strict';
module.exports = (sequelize, DataTypes) => {
  var employees_computers = sequelize.define('employees_computers', {
    assign_date: DataTypes.DATEONLY,
    return_date: DataTypes.DATEONLY
  });

  // employees_computers.associate = models => {
  //   employees_computers.belongsTo(models.computer);
  // };

  return employees_computers;
};
