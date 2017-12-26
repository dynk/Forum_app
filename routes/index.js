const router = require('express').Router();
const ctrl = require('../controllers/info');
const usersCtrl = require('../controllers/users');


router.get('/', ctrl.get);


// users route
router.post('/users', usersCtrl.post);
router.get('/users', usersCtrl.get);
router.get('/users/:id', usersCtrl.getById);


module.exports = router;
