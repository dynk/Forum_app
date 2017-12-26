const mongoose = require('mongoose');
const { UserSchema } = require('../models/users');
const User = mongoose.model('User', UserSchema);
const service = require('../services/users');

async function post(req, res) {
    try{
        const response = await service.post(req.body);
        return res.json(response);
    }catch(e) {
        return res.json(e);
    }

}

async function get(req, res) {
    try{
        const response = await service.get();
        return res.json(response);
    }catch(e) {
        return res.json(e);
    }

}

async function getById(req, res) {
    try{
        const response = await service.getById(req);
        return res.json(response);
    }catch(e) {
        return res.json(e);
    }

}

module.exports = {
    post,
    get,
    getById
};