const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            trim: true,
            unique: true,
            validate:{
                validator: validator.isEmail,
                message: '{VALUE} is not valid'
            }
        },
        password: {
            type: String,
            required: true
        },
        tokens:[{
            access:{
                type: String,
                required: true
            },
            token:{
                type: String,
                required: true
            }
        }]
    }
);

UserSchema.methods.toJSON =  function () {
    const user = this;
    const userObject = user.toObject();
    return _.pick(userObject,['_id','email','name']);
}

UserSchema.methods.generateAuthToken = function () {
    const user = this;
    const access = 'auth';
    const token = jwt.sign({_id: user._id.toHexString()}, 'secret123').toString();
    user.tokens.push({access, token});
    return user.save().then(() => token);
    // const result = await user.save();
    // return result;
}

UserSchema.statics.findByToken = function (token) {
    const user = this;
    let decoded;
    try{
        decoded = jwt.verify(token, 'secret123');
    }catch(e){
        return Promise.reject(e);
    }
    return UserModel.findOne({
        _id: decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    })
}

UserSchema.statics.findByCredentials = function (email, password) {
    const user = this;

    return UserModel.findOne({email}).then((user) => {
        if(!user){
            return Promise.reject('User does not exist!');
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password.toString(), user.password, (err,res) => {
                if(res){
                    return resolve(user);
                }
                return reject('Not valid password');
            });
        });
    })
}

UserSchema.pre('save', function(next){
    const user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                user.password = hash;
                next();
            });
        });
    }else{
        next();
    }

});

const UserModel = mongoose.model('User', UserSchema);
  
module.exports = {
    UserSchema,
    UserModel
};