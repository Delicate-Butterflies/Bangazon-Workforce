'use strict';

const { Router } = require('express');
const router = Router();
const { getDepartments, getDepartmentById, addDepartmentForm, createDepartment } = require('../controllers/department-ctrl');

router.get('/departments', getDepartments);
router.get('/departments/add', addDepartmentForm);
router.post('/departments/add', createDepartment);
router.get('/departments/:id', getDepartmentById);

module.exports = router;
