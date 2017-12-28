const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema(
    {
        name: String,
        lastName: String,
        birthDay: Date,
        userName: String,
        password: String
    }
);

const UserModel = mongoose.model('User', UserSchema);
  
module.exports = {
    UserSchema,
    UserModel
};