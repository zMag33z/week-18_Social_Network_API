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
            required: true,
            maxlength: 250,
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

  const Reaction = model('reaction', reactionSchema);

  module.exports = Reaction;