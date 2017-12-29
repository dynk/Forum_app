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
        description: String,
        created: { type: Date, default: Date.now }
    }
);

const MessageModel = mongoose.model('Message', MessageSchema);
  
module.exports = {
    MessageSchema,
    MessageModel
};