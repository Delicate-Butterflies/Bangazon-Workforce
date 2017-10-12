'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployeeById } = require('../controllers/employee-ctrl');
router.get('/employees/:id/edit', getEmployees);
module.exports = router;
