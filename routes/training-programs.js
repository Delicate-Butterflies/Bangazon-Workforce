'use strict';

const { Router } = require('express');
const router = Router();

const { getTrainingPrograms, postTrainingProgram } = require('../controllers/training-programs-ctrl');
router.get('/training', getTrainingPrograms);
router.post('/training/add', postTrainingProgram);
module.exports = router;
