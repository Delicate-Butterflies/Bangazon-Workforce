'use strict';

const { Router } = require('express');
const router = Router();

const { addEmployee } = require('../controllers/employee-ctrl');
router.post('/employees/add', addEmployee);
module.exports = router;
