'use strict';

const { Router } = require('express');
const router = Router();

const { getTrainingPrograms } = require('../controllers/training-programs-ctrl');
router.get('/training', getTrainingPrograms);
module.exports = router;
