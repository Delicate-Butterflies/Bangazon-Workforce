'use strict';

const { Router } = require('express');
const router = Router();

const {
  getTrainingPrograms,
  postTrainingProgram,
  getForm,
  getProgramById
} = require('../controllers/training-programs-ctrl');

router.get('/training', getTrainingPrograms);
router.post('/training-add', postTrainingProgram);
router.get('/training-add', getForm);
router.get('/training/:id', getProgramById);
module.exports = router;
