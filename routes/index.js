const router = require('express').Router();
const ctrl = require('../controllers/info');
const usersCtrl = require('../controllers/users');
const topicsCtrl = require('../controllers/topics');

// info
router.get('/', ctrl.get);


// users route
router.post('/users', usersCtrl.post);
router.get('/users', usersCtrl.get);
router.get('/users/:id', usersCtrl.getById);
router.post('/users/:userId/topics', usersCtrl.postTopic);
router.get('/users/:userId/topics', usersCtrl.getTopics);
router.get('/users/:userId/topics/:topicId', usersCtrl.getTopicsById);
router.post('/users/:userId/topics/:topicId/messages', usersCtrl.postMessage);
router.get('/users/:userId/topics/:topicId/messages', usersCtrl.getMessage);


// topics route
router.get('/topics', topicsCtrl.get);
router.get('/topics/:id', topicsCtrl.getById);
router.get('/topics/:topicId/messages', topicsCtrl.getMesssage);


module.exports = router;
