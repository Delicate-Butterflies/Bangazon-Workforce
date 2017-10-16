'use strict';

const { Router } = require('express');
const router = Router();

const {
  getEmployees,
  showEmployeeForm,
  addEmployee,
  showEmployeeDetails,
  editEmployeeDetails,
  saveEmployeeDetails
} = require('../controllers/employee-ctrl');

// employee list
router.get('/employees', getEmployees);
router.get('/employees/:id', showEmployeeDetails);

// add employee (form)
router.get('/employees/add', showEmployeeForm);
router.post('/employees/add', addEmployee);

// show edit employee by id
router.get('/employees/:id/edit', editEmployeeDetails);
router.post('/employees/:id/edit', saveEmployeeDetails);
module.exports = router;
