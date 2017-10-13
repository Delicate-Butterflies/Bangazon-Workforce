'use strict';
module.exports = (sequelize, DataTypes) => {
	var training_program = sequelize.define('training_program', {
		start_date: DataTypes.DATEONLY,
		end_date: DataTypes.DATEONLY,
		max_attendance: DataTypes.INTEGER,
		title: DataTypes.STRING,
		description: DataTypes.STRING
	});
	training_program.associate = function(models) {
		training_program.belongsToMany(models.employee, {
			// as: 'signedupPrograms',
			through: 'employees_trainings',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});
	};
	return training_program;
};
