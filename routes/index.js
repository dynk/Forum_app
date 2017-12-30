const router = require('express').Router();
const { authenticate } = require('../middlewares/authenticate');
const ctrl = require('../controllers/info');
const usersCtrl = require('../controllers/users');
const topicsCtrl = require('../controllers/topics');

// info
router.get('/', ctrl.get);


// users route
router.post('/users', usersCtrl.post);
router.post('/users/login', usersCtrl.login);
router.get('/users',authenticate, usersCtrl.get);
router.get('/users/:id', authenticate, usersCtrl.getById);
router.post('/users/:userId/topics', authenticate, usersCtrl.postTopic);
router.get('/users/:userId/topics', authenticate, usersCtrl.getTopics);
router.get('/users/:userId/topics/:topicId', authenticate, usersCtrl.getTopicsById);
router.post('/users/:userId/topics/:topicId/messages', authenticate, usersCtrl.postMessage);
router.get('/users/:userId/topics/:topicId/messages', authenticate, usersCtrl.getMessage);


// topics route
router.get('/topics', authenticate, topicsCtrl.get);
router.get('/topics/:id', authenticate, topicsCtrl.getById);
router.get('/topics/:topicId/messages', authenticate, topicsCtrl.getMesssage);


module.exports = router;
