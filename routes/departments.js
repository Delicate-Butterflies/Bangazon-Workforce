'use strict';

const { Router } = require('express');
const router = Router();
const {
  getDepartments,
  getDepartmentById,
  addDepartmentForm,
  createDepartment
} = require('../controllers/department-ctrl');

// lists departments
router.get('/departments', getDepartments);

// renders form to add departments
router.get('/departments/add', addDepartmentForm);

// handles form to add departments
router.post('/departments/add', createDepartment);

// renders the employee list for a department
router.get('/departments/:id', getDepartmentById);

module.exports = router;
