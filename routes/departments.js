'use strict';

const { Router } = require('express');
const router = Router();
const { getDepartments, getDepartmentById } = require('../controllers/department-ctrl');

router.get('/departments', getDepartments);
router.get('/departments/:id', getDepartmentById);
module.exports = router;
