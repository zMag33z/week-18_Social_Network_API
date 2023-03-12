const { Schema, model, Types } = require('mongoose');
const formatDate = require('../utils/formatDate');

// Reactions to add to thoughts
const reactionSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },  
        text: {
            type: String,
            min: [1, 'Must include at least 1 character'],
            max: [280, 'Sorry, only 280 characters allowed.'],
            required: true,
        },  
        createdAt: {
            type: Date,
            default: Date.now,
            // get: standardDate => formatDate(standardDate),
        },
    },
    {
        toJSON: {
            // getters: true,
        },
        id: false,
    }
  );


  
  module.exports = reactionSchema;