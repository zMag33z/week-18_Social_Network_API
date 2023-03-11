const User = require('../models');

module.exports = {
  // retrieve all user in database
  getUsers(req, res){
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // find one User by id
  getSingleUser(req, res){
    User.findOne({ _id: req.params.userID })
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
  // create a new user
  createUser(req, res){
    User.create(req.body)
      .then(newUserData => res.json(newUserData))
      .catch((err) => res.status(500).json(err));
  },
  // update existing 
  updateUser(req, res){
    User.findOneAndUpdate({ _id: req.params.userID}, req.body, { runValidators: true, new: true })
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
  deleteUser(req, res){
    User.findOneAndDelete({ _id: req.params.userID })
      .then(userRecord => {
        if(!userRecord){
          return res.status(404).send({ message: 'User Id Not Found' })
        };
        return res.json(userRecord);
      })
      .catch(err =>{
        res.status(400).json(err);
      });
  },
  // add to friends list
  addFriend(req, res){
    User.findOneAndUpdate(
      { _id: req.params.userID},
      { $addToSet: { friends: req.params.friendID } },
      { runValidators: true, new: true },
      )
    .then(userRecord => {
      if(!userRecord){
        return res.status(404).json({ message: 'User Id Not Found'})
      };
      return res.json(userRecord);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  },
  // remove from friends list
  deleteFriend(req, res){
    User.findOneAndUpdate(
      { _id: req.params.userID},
      { $pull: { friends: req.params.friendID } },
      { runValidators: true, new: true })
      .then(userRecord => {
        if(!userRecord){
          return res.status(404).json({ message: 'User Id Not Found'})
        };
        return res.json(userRecord);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};