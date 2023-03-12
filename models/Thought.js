const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const formatDate = require('../utils/formatDate');

// Schema to create Post model
const thoughtSchema = new Schema(
    {
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
            // get: standardDate => formatDate(standardDate)
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            // getters: true,
        },
        id: false,
    }
);

// Virtual column created for reaction count per thought.
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// Once compiled, send through constructor and create model.
const Thought = model('thought', thoughtSchema);


module.exports = Thought;