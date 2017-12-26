const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        name: String,
        lastName: String,
        birthDay: Date,
        userName: String,
        password: String
    }
);


  
module.exports = {
    UserSchema
};