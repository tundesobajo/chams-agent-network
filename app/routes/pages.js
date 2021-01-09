const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pages');

/* Sets layout for all routes in this path group */
router.all('/*', function (req, res, next) {
  req.app.locals.layout = 'layout'; // set your layout here
  next(); // pass control to the next handler
});

/* Main Pages */
router.get('/', ctrl.index);
router.get('/about', ctrl.about);

module.exports = router;
