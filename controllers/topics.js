const service = require('../services/topics');

async function post(req, res) {
    try{
        const response = await service.post(req);
        return res.json(response);
    }catch(e) {
        return res.json(e);
    }

}

async function get(req, res) {
    try{
        const response = await service.get(req);
        return res.json(response);
    }catch(e) {
        return res.json(e);
    }
}

async function getMesssage(req, res) {
    try{
        const response = await service.getMesssage(req);
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
    getById,
    getMesssage
};