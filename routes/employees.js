'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployees } = require('../controllers/employee-ctrl');
router.get('/employees', getEmployees);
module.exports = router;
