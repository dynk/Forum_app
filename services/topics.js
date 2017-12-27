const mongoose = require('mongoose');
const { TopicSchema, TopicModel } = require('../models/topics');


async function post(req){
    if(!req.params) throw 'Params is needed';
    const { userId } = req.params;
    const { body } = req;
    if(!body) throw 'Name is needed';


    const topic = new TopicModel({
        user: userId,
        name: body.name
    });
    try{
        await topic.save();
        return topic;
    }catch(e){
        throw e;
    }
}

async function get(req){

    let response;
    try{
        // response = await Topic.findOne({user: req.params.userId});
        response = await Topic.findOne({user: req.params.userId}).populate('user').exec(function (err, story) {
            if (err) return err;
            console.log('The author is %s', story);
            // prints "The author is Ian Fleming"
          });;
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