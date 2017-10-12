'use strict';

let employees = require('../data/employees');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('employees', employees, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('employees', null, {});
	}
};
