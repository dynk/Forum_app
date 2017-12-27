const mongoose = require('mongoose');
const service = require('../services/users');

async function post(req, res) {
    try{
        const response = await service.post(req.body);
        return res.json(response);
    }catch(e) {
        return res.json(e);
    }
}

async function postTopic(req, res) {
    try{
        const response = await service.postTopic(req);
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
async function getTopics(req, res) {
    try{
        const response = await service.getTopics(req);
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
    postTopic,
    get,
    getTopics,
    getById
};