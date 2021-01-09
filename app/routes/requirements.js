const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/requirements');

/* Checklist Pages */
router.get('/', ctrl.index);
router.get('/qualification-checklist-and-required-documents', ctrl.group1);
router.get('/staff-requirements', ctrl.group2);
router.get('/setup-cost', ctrl.group3);
router.get('/equipment', ctrl.group4);
router.get('/location', ctrl.group5);
router.get('/vehicle', ctrl.group6);


module.exports = router;
