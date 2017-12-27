const router = require('express').Router();
const ctrl = require('../controllers/info');
const usersCtrl = require('../controllers/users');
const topicsCtrl = require('../controllers/topics');


router.get('/', ctrl.get);


// users route
router.post('/users', usersCtrl.post);
router.get('/users', usersCtrl.get);
router.get('/users/:id', usersCtrl.getById);
router.post('/users/:userId/topics', usersCtrl.postTopic);
router.get('/users/:userId/topics', usersCtrl.getTopics);

// topics route
router.get('/topics', topicsCtrl.get);
router.get('/topics/:id', topicsCtrl.getById);



module.exports = router;
