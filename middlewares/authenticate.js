const { UserModel } = require('../models/users');

function authenticate(req, res, next) {
    const token = req.header('x-auth');
    UserModel.findByToken(token)
        .then((user) => next())
        .catch((e) => res.status(401).json('Not authorized!'))
}
module.exports = { authenticate };