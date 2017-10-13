'use strict';

/* @module Employee List Controller */

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

module.exports.showEmployeeForm = (req, res, next) => {
	const { department } = req.app.get('models');
	department.findAll().then(departments => {
		res.render('employee-add', { departments });
	});
};

module.exports.addEmployee = (req, res, next) => {
	// console.log('running add', req.body);
};
