'use strict';

const { Router } = require('express');
const router = Router();

const { getComputers, getComputerById, showComputerForm, addComputer } = require('../controllers/computer-ctrl');

// get all computers
router.get('/computers', getComputers);

// show computer details by id
router.get('/computers/:id', getComputerById);

// add computer (form)
router.get('/computers-add', showComputerForm);
router.post('/computers-add', addComputer);

module.exports = router;
