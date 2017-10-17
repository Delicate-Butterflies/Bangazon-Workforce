'use strict';

const { Router } = require('express');
const router = Router();

const {
  getComputers,
  getComputerById,
  showComputerForm,
  addComputer,
  // deleteComputer,
  // decomissionComputer
  removeComputer
} = require('../controllers/computer-ctrl');

// get all computers
router.get('/computers', getComputers);

// show computer details by id
router.get('/computers/:id', getComputerById);

// add computer (form)
router.get('/computers-add', showComputerForm);
router.post('/computers-add', addComputer);

// delete and put computer (method-override) with post method
router.post('/computers/:id', removeComputer);

module.exports = router;
