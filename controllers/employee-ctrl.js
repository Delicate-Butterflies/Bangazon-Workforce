'use strict';

/* @module Employee List Controller */

/**
 * Gets all employees from the database and renders them.
 */
module.exports.getEmployees = (req, res, next) => {
	const { employee, department } = req.app.get('models');
	employee
		.findAll({ include: [{ model: department }] })
		.then(employees => {
			res.render('employees-list', { employees });
		})
		.catch(err => {
			next(err);
		});
};

module.exports.showEmployeeDetails = (req, res, next) => {
	const { employee } = req.app.get('models');
	employee
		.findAll({
			include: [{ all: true }],
			where: { id: req.params.id }
		})
		.then(employee => {
			console.log('employee', employee);
			// res.render('employee-view', { employee });
		})
		.catch(err => {
			next(err);
		});
};

/**
 * Gets an employee by their Id and displays them for editing
 */
module.exports.getEmployeeById = (req, res, next) => {
	const { employee, department } = req.app.get('models');
	employee
		.findById(req.params.id, {
			include: [{ model: department }]
		})
		.then(employee => {
			res.render('employee-edit', { employee });
		})
		.catch(err => {
			next(err);
		});
};

/**
 * Displays form for creating a new employee
 */
module.exports.showEmployeeForm = (req, res, next) => {
	const { department } = req.app.get('models');
	department.findAll().then(departments => {
		res.render('employee-add', { departments });
	});
};

/**
 * Adds an employee to the database then redirects to the list of employees
 */
module.exports.addEmployee = (req, res, next) => {
	const { employee } = req.app.get('models');
	employee.create(req.body).then(data => {
		res.redirect('/employees');
	});
};
