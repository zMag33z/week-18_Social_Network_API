// Description: This file contains the schema for the Thought model.

// require mongoose to create a schema and model
const { Schema, model } = require('mongoose');
// require reaction schema file
const ReactionSchema = require('./Reaction');

// Schema to create Thought model
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
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Virtual column created for reaction count per thought.
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// Once compiled, send through constructor and create model.
const Thought = model('Thought', thoughtSchema);

// export thought to model index
module.exports = Thought;