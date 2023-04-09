// This file will be the entry point for all of our models

// require models to export
const User = require('./User');
const Thought = require('./Thought');

// We will export an object containing all of our models
module.exports = { User, Thought };