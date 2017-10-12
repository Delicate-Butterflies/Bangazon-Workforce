'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
	res.render('home');
});

// pipe all other requests through the route modules
// router.use(require('./computers'));
router.use(require('./employees'));
router.use(require('./employee-add'));
router.use(require('./employee-edit'));
// router.use(require('./foo'));

module.exports = router;
