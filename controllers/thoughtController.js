// Purpose: Controller for thoughts
// require User and Thought models
const { User, Thought } = require('../models');


// export when called
module.exports = {
  // retrieve all thoughts
  getThoughts(req, res){
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // find one User by id
  getSingleThought(req, res){
    Thought.findOne({ _id: req.params.thoughtID })
      .then(singleThought => {
        if(!singleThought){
          return res.status(404).send({ message: 'Thought Id Not Found' })
        };
        return res.json(singleThought);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },
  // create new thought connected to user
  createThought(req, res){
    Thought.create(req.body)
      .then(newThought => {
        return User.findOneAndUpdate(
            { _id: req.body.userID },
            { $addToSet: { thoughts: newThought._id } },
            { runValidators: true, new: true },
        );
    })
      .then(newUserData => {
        res.json(newUserData);
      })
      .catch((err) => {
        res.status(500).json(err)
      });
  },
  // update existing 
  updateThought(req, res){
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID},
      { $set: req.body },
      { runValidators: true, new: true },
      )
      .then(thoughtRecord => {
        if(!thoughtRecord){
          return res.status(404).send({ message: 'Thought Id Not Found' })
        };
        return res.json(thoughtRecord);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },
  // delete existing
  deleteThought(req, res){
    Thought.findOneAndDelete(req.params.thoughtID)
      .then(thisThought => {
        return User.findOneAndUpdate(
            { _id: req.body.userID },
            { $pull: { thoughts: req.params.thoughtID } },
            { runValidators: true, new: true },
        );
    })
      .then(newUserData => {
        res.json(newUserData);
      })
      .catch((err) => {
        res.status(500).json(err)
      });
  },
  // all reactions
  getReactions(req, res){
    Thought.findOne({ _id: req.params.thoughtID })
    .then(singleThought => {
      if(!singleThought){
        return res.status(404).send({ message: 'Thought Id Not Found' })
      };
      return res.json(singleThought.reactions);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  },
  getSingleReaction(req, res){
    Thought.findOne({ "reactions.reactionId": req.params.reactionID}, {"reactions.$": 1} )
    .then(singleThought => {
      if(!singleThought){
        return res.status(404).send({ message: 'Reaction Id Not Found' })
      };
      return res.json(singleThought.reactions);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  },
  // add reaction
  addReaction(req, res){
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID},
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true },
      )
    .then(reactionRecord => {
      if(!reactionRecord){
        return res.status(404).json({ message: 'Thought ID Not Found'})
      };
      return res.json(reactionRecord);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  },  
  // remove reaction 
  deleteReaction(req, res){
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID},
      { $pull: { reactions: { reactionId: req.params.reactionID } } },
      { runValidators: true, new: true })
      .then(thoughtRecord => {
        if(!thoughtRecord){
          return res.status(404).json({ message: 'Reaction ID Not Found'})
        };
        return res.json(thoughtRecord);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};