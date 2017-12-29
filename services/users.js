const { UserSchema, UserModel } = require('../models/users');
const { TopicSchema, TopicModel } = require('../models/topics');
const { MessageSchema, MessageModel } = require('../models/messages');


async function post(body){
    if(!body) throw 'Body is needed';
    if(!body.name) throw 'Name is needed';
    if(!body.email) throw 'Email is needed';
    if(!body.password) throw 'Password is needed';

    const user = new UserModel(body);
    try{
        await user.save();
    }catch(err){
        throw err.message;
    }
    
    const token = await user.generateAuthToken();
    return {user, token};
}

async function login(body){
    if(!body) throw 'Body is needed';
    const {email, password} = body;
    if(!email) throw 'Email is needed';
    if(!password) throw 'Password is needed';

    const user = await UserModel.findByCredentials(email,password);
    const token = await user.generateAuthToken();
    return {user, token};
    // await user.save();
    // const token = await user.generateAuthToken();
    // return {user, token};
}

async function postTopic(req){
    if(!req.params) throw 'Params is needed';
    const { userId } = req.params;
    const { body } = req;
    if(!body) throw 'Name is needed';
    const {title, tag, description} = body;
    if(!title) throw 'Title is needed';

    const topic = new TopicModel({
        user: userId,
        title: title,
        tag: tag,
        description: description
    });
    await topic.save();

    return topic;
}

async function postMessage(req){
    if(!req.params) throw 'Params is needed';
    const { userId, topicId } = req.params;
    const { body } = req;
    if(!body) throw 'Body is needed';

    const message = new MessageModel({
        user: userId,
        topic: topicId,
        description: body.description
    });
    await message.save();
    return message;
}

async function get(req){

    let response;
    response = await UserModel.find({});
    return response;
}

async function getById(req){
    if(!req.params) throw 'Params is not defined';
    const { id } = req.params;
    if(!id) throw 'Id is needed';
    let response;
    response = await UserModel.findOne({_id: id});
    return response;
}

async function getTopicsById(req){
    if(!req.params) throw 'Params is not defined';
    const { topicId } = req.params;
    if(!topicId) throw 'Id is needed';
    let response;
    response = await TopicModel.findOne({_id: topicId});
    return response;
}

async function getTopics(req){
    
    let response;
    response = await TopicModel.find({user: req.params.userId}).populate('user');
    return response;
}


async function getMessage(req){
    
    let response;
    response = await MessageModel.find({user: req.params.userId});
    return response;
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
}