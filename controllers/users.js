const mongoose = require('mongoose');
const service = require('../services/users');

async function post(req, res) {
    try{
        const response = await service.post(req.body);
        return res.header('x-auth',response.token).json(response);
    }catch(e) {
        return res.status(500).json(e);
    }
}

async function login(req, res) {
    try{
        const response = await service.login(req.body);
        return res.header('x-auth',response.token).json(response);
    }catch(e) {
        return res.status(500).json(e);
    }
}

async function postTopic(req, res) {
    try{
        const response = await service.postTopic(req);
        return res.send(response);
    }catch(e) {
        return res.status(500).json(e);
    }
}

async function postMessage(req, res) {
    try{
        const response = await service.postMessage(req);
        return res.json(response);
    }catch(e) {
        return res.status(500).json(e);
    }

}

async function get(req, res) {
    try{
        const response = await service.get();
        return res.json(response);
    }catch(e) {
        return res.status(500).json(e);
    }

}
async function getTopics(req, res) {
    try{
        const response = await service.getTopics(req);
        return res.json(response);
    }catch(e) {
        return res.status(500).json(e);
    }
}

async function getTopicsById(req, res) {
    try{
        const response = await service.getTopicsById(req);
        return res.json(response);
    }catch(e) {
        return res.status(500).json(e);
    }
}

async function getMessage(req, res) {
    try{
        const response = await service.getMessage(req);
        return res.json(response);
    }catch(e) {
        return res.status(500).json(e);
    }

}

async function getById(req, res) {
    try{
        const response = await service.getById(req);
        return res.json(response);
    }catch(e) {
        return res.status(500).json(e);
    }

}

module.exports = {
    login,
    post,
    postTopic,
    postMessage,
    get,
    getTopics,
    getTopicsById,
    getMessage,
    getById
};