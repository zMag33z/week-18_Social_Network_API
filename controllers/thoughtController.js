const { User, Thought } = require('../models');

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
  // create a new thought connected to user
  createThought(req, res){
    Thought.create(req.body)
      .then(req => {
        return User.findOneAndUpdate(
            { _id: req.params.userID },
            { $push: { thoughts: _id } },
            { runValidators: true, new: true },
        )
    })
      .then(newUserData => res.json(newUserData))
      .catch((err) => res.status(500).json(err));
  },
  // update existing 
  updateThought(req, res){
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID},
      req.body,
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
    Thought.findOneAndDelete({ _id: req.params.thoughtID })
      .then(thoughtRecord => {
        if(!thoughtRecord){
          return res.status(404).send({ message: 'Thought Id Not Found' })
        };
        return User.findOneAndUpdate(
          { _id: req.params.userID },
          { $pull: { thoughts: _id } },
          { runValidators: true, new: true },
      )
      })
      .then(newUserData => res.json(newUserData))
      .catch(err =>{
        res.status(400).json(err);
      });
  },// add reaction
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
  },  // remove reaction 
  deleteReaction(req, res){
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtID},
      { $pull: { reactions: { reactionId: req.params.reactionID } } },
      { runValidators: true, new: true })
      .then(userRecord => {
        if(!userRecord){
          return res.status(404).json({ message: 'Thought ID Not Found'})
        };
        return res.json(userRecord);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};