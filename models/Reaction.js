// Description: Reaction model for thoughts
// require mongoose to create a schema and model
const { Schema, Types } = require('mongoose');

// Reactions to add to thoughts
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            required: true,
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
        },
    },
    {
        toJSON: {
        },
        _id: false,
        id: false,
    }
  );

  // export reaction to thought model
  module.exports = ReactionSchema;