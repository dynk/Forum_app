const mongoose = require('mongoose');
const { UserSchema } = require('../models/users');
const User = mongoose.model('User', UserSchema);

async function post(body){
    if(!body) throw 'Body is needed';
    if(!body.name) throw 'Name is needed';

    const user = new User(body);
    try{
        await user.save();
        return user;
    }catch(e){
        throw e;
    }
}

async function get(req){

    let response;
    try{
        response = await User.find({});
        return response;
    }catch(e){
        throw e;
    }
}

async function getById(req){
    if(!req.params) throw 'Params is not defined';
    const { id } = req.params;
    if(!id) throw 'Id is needed';
    let response;
    try{
        response = await User.findOne({_id: id});
        return response;
    }catch(e){
        throw e;
    }
}

module.exports = {
    post, 
    get,
    getById
}