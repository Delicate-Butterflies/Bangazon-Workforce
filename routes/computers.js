'use strict';

const { Router } = require('express');
const router = Router();

const { getComputers, getComputerById } = require('../controllers/computer-ctrl');

// When the request is a GET on the computers route, call get Computers
router.get('/computers', getComputers);
router.get('/computers/:id', getComputerById);

module.exports = router;
