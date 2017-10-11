'use strict';

module.exports = (sequelize, DataTypes) => {
	var Employee = sequelize.define(
		'Employee',
		{
			department_id: DataTypes.INTEGER,
			email: DataTypes.STRING,
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			phone_number: DataTypes.STRING,
			state_code: DataTypes.STRING,
			street_address: DataTypes.STRING,
			zip_code: DataTypes.INTEGER,
			city_address: DataTypes.STRING,
			id: DataTypes.INTEGER,
			job_title: DataTypes.STRING
		},
		{
			// sets updatedAt, createdAt to use underscores.
			underscored: true
		}
	);

	Employee.associate = models => {
		// associations can be defined here
	};

	return Employee;
};
