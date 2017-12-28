const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TopicSchema = mongoose.Schema(
    {
        user: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        },
        title: String,
        description: String
    }
);

const TopicModel = mongoose.model('Topic', TopicSchema);
  
module.exports = {
    TopicSchema,
    TopicModel
};