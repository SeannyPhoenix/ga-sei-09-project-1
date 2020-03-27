const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../models');
const ctrl = require('../controllers');

router.use(bodyParser.json());

router.get('/books', ctrl.apiCtrl.indexBooks);
router.get('/books/:id', ctrl.apiCtrl.showBook);
router.get('/users', ctrl.apiCtrl.indexUsers);
router.get('/users/:id', ctrl.apiCtrl.showUser);
router.put('/users/:id', ctrl.apiCtrl.updateUser);
router.get('/users/:id/ratings', ctrl.apiCtrl.showUserRatings);
router.get('/books/:id/ratings', ctrl.apiCtrl.showBookRatings);
router.get('/ratings', ctrl.apiCtrl.indexRatings);
router.get('/ratings/:id', ctrl.apiCtrl.showRating);
router.post('/ratings', ctrl.apiCtrl.createRating);
router.put('/ratings/:id', ctrl.apiCtrl.updateRating);
router.delete('/ratings/:id', ctrl.apiCtrl.deleteRating);

// Auth
router.post('/register', ctrl.authCtrl.register);
router.post('/login', ctrl.authCtrl.login);
router.delete('/logout', ctrl.authCtrl.logout);
router.get('/verify', ctrl.authCtrl.verify)

module.exports = router;