const router = require('express').Router();
const ctrl = require('../controllers/info');
const usersCtrl = require('../controllers/users');


router.get('/', ctrl.get);
router.post('/users', usersCtrl.post);

module.exports = router;
