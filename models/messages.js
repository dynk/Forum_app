const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = mongoose.Schema(
    {
        user: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        },
        topic: { 
            type: Schema.Types.ObjectId, 
            ref: 'Topic' 
        },
        title: String,
        description: String
    }
);

const MessageModel = mongoose.model('Message', MessageSchema);
  
module.exports = {
    MessageSchema,
    MessageModel
};