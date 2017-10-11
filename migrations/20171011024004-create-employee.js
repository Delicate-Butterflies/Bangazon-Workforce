'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			'Employees',
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				department_id: {
					type: Sequelize.INTEGER
				},
				email: {
					type: Sequelize.STRING
				},
				first_name: {
					type: Sequelize.STRING
				},
				last_name: {
					type: Sequelize.STRING
				},
				phone_number: {
					type: Sequelize.STRING
				},
				state_code: {
					type: Sequelize.STRING
				},
				street_address: {
					type: Sequelize.STRING
				},
				zip_code: {
					type: Sequelize.INTEGER
				},
				city_address: {
					type: Sequelize.STRING
				},
				// created_at: {
				// 	type: Sequelize.DATE
				// },
				job_title: {
					type: Sequelize.STRING
				},
				// updated_at: {
				// 	type: Sequelize.DATE
				// },
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE
				}
			},
			{
				underscored: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Employees');
	}
};
