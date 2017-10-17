'use strict';
module.exports = (sequelize, DataTypes) => {
  var employees_computers = sequelize.define('employees_computers', {
    assign_date: DataTypes.DATEONLY,
    return_date: DataTypes.DATEONLY
  });

  return employees_computers;
};
