const router = require('express').Router();
const ctrl = require('../controllers/info');
const usersCtrl = require('../controllers/users');
const topicsCtrl = require('../controllers/topics');


router.get('/', ctrl.get);


// users route
router.post('/users', usersCtrl.post);
router.get('/users', usersCtrl.get);
router.get('/users/:id', usersCtrl.getById);

// topics route
router.post('/users/:userId/topics', topicsCtrl.post);
router.get('/users/:userId/topics', topicsCtrl.get);


module.exports = router;
