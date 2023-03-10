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
    Thought.findOne({ _id: req.params.userId })
      .then(userRecord => {
        if(!userRecord){
          return res.status(404).send({ message: 'User Id Not Found' })
        };
        return res.json(userRecord);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },
  // create a new thought connected to user
  createThought(req, res){
    Thought.create(req.body)
      .then(newThought => {
        const currentUser = User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { thoughts: _id } },
            { runValidators: true, new: true },
        )
        res.json(newThought)
    })
      .catch((err) => res.status(500).json(err));
  },
  // update existing 
  updateThought(req, res){
    Thought.findOneAndUpdate({ _id: req.params.userID}, req.body, { runValidators: true, new: true })
      .then(userRecord => {
        if(!userRecord){
          return res.status(404).send({ message: 'User Id Not Found' })
        };
        return res.json(userRecord);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },
  // delete existing
  deleteThought(req, res){
    Thought.findOneAndDelete({ _id: req.params.userID })
      .then(userRecord => {
        if(!userRecord){
          return res.status(404).send({ message: 'User Id Not Found' })
        };
        return res.json(userRecord);
      })
      .catch(err =>{
        res.status(400).json(err);
      });
  }
};