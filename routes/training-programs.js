'use strict';

const { Router } = require('express');
const router = Router();

const { getTrainingPrograms, postTrainingProgram, getForm } = require('../controllers/training-programs-ctrl');
router.get('/training', getTrainingPrograms);
router.post('/training-add', postTrainingProgram);
router.get('/training-add', getForm);
module.exports = router;
