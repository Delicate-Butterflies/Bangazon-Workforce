'use strict';
module.exports = (sequelize, DataTypes) => {
  var department = sequelize.define('department', {
    supervisor_employee_id: DataTypes.INTEGER,
    expense_budget: DataTypes.INTEGER,
    name: DataTypes.STRING
  });
  department.associate = function(models) {
    department.hasMany(models.employee);
  };
  return department;
};
