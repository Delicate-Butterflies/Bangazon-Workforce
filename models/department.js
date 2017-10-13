'use strict';
module.exports = (sequelize, DataTypes) => {
	var department = sequelize.define('department', {
		supervisor_employeeId: DataTypes.INTEGER,
		expense_budget: DataTypes.INTEGER,
		name: DataTypes.STRING
	});
	/**
   *  employee and departments table have one to many relationship. An employee can be in a single department but a department can have multiple employees. hasMany associates many to one relationship between department and employees.
   */
	department.associate = function(models) {
		department.hasMany(models.employee, {
			foreignKey: 'departmentId'
		});
	};
	return department;
};
