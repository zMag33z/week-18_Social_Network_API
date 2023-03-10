const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
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
            maxLength: 250,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: standardDate => formatDate(standardDate)
        },
        reactions: [ Reaction ],
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