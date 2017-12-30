const { UserModel } = require('../models/users');

function authenticate(req, res, next) {
    const tokenHeader = req.header('x-auth');
    let { token } = req.query
    token = tokenHeader || token; 
    UserModel.findByToken(token)
        .then((user) => next())
        .catch((e) => res.status(401).json('Not authorized!'))
}
module.exports = { authenticate };