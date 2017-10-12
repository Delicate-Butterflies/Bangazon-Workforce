'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
	res.render('home');
});

// pipe all other requests through the route modules
router.use(require('./employees'));

module.exports = router;
