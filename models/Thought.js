const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');

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


module.exports = Thought;