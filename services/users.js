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

module.exports = {
    post
}