'use strict';

const { Router } = require('express');
const router = Router();

const {
	getEmployees,
	showEmployeeForm,
	addEmployee
} = require('../controllers/employee-ctrl');

// employee list
router.get('/employees', getEmployees);

// add employee (form)
router.get('/employees/add', showEmployeeForm);
router.post('/employees/add', addEmployee);

// show edit employee by id

module.exports = router;
