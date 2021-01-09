const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/partners');

/* Partner Pages */
router.get('/', ctrl.index);
router.get('/options', ctrl.options);
router.get('/steps', ctrl.steps);
router.get('/obligations', ctrl.obligations);


module.exports = router;
