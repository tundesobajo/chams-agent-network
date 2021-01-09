const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/applications');

/* Checklist Pages */
router.get('/', ctrl.index);
router.get('/start', ctrl.start);
router.get('/check-coverage-area', ctrl.areaCheck);


module.exports = router;
