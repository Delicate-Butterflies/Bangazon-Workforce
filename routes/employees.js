'use strict';

const { Router } = require('express');
const router = Router();

const {
	getEmployees,
	showEmployeeForm,
	addEmployee,
	showEmployeeDetails
} = require('../controllers/employee-ctrl');

// employee list
router.get('/employees', getEmployees);
router.get('/employees/:id', showEmployeeDetails);

// add employee (form)
router.get('/employees-add', showEmployeeForm);
router.post('/employees-add', addEmployee);

// show edit employee by id

module.exports = router;
