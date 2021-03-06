'use strict';

const express = require('express');
const router = express.Router();
const about = require('./controllers/about.js');

const dashboard = require('./controllers/dashboard.js');
const accounts = require('./controllers/accounts.js');
const trainerdashboard = require('./controllers/trainerdashboard.js');

router.get('/about', about.index);
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.get('/updatemember', accounts.formForMemberUpdate);
router.post('/updatemember', accounts.updateMember);
router.get('/trainerdashboard', trainerdashboard.index);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
router.post('/trainerdashboard/addcomment/:memberId/:assessmentId', trainerdashboard.addComment);
router.get('/dashboard', dashboard.index);
router.post('/dashboard/addassessment', dashboard.addAssessment);
router.post('/dashboard/addgoal', dashboard.addGoal);
router.post('/trainerdashboard/addgoal/:memberId', trainerdashboard.addGoal);
router.get('/listassessments/:memberId', trainerdashboard.trainerAssessment);
router.get('/dashboard/deleteassessment/:assessmentId', dashboard.deleteAssessment);
router.get('/trainerdashboard/deletemember/:memberId', trainerdashboard.deleteMember);

module.exports = router;