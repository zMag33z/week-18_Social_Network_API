// Purpose: Controller for User model
// require User model
const { User } = require('../models');

// export when called
module.exports = {
  // retrieve all user in database
  getUsers(req, res){
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // retrieve one User by request id
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
  // create a new user by request body provided it doesn't already exisit in the database
  createUser(req, res){
    User.create(req.body)
      .then(newUserData => res.json(newUserData))
      .catch((err) => res.status(500).json(err));
  },
  // update existing user by request id
  updateUser(req, res){
    User.findOneAndUpdate(
      { _id: req.params.userID },
      { $set: req.body },
      { runValidators: true, new: true }
      )
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
  // delete existing user by request id
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
  // request of friend's id to add to user's friend list
  addFriend(req, res){
    User.findOneAndUpdate(
      { _id: req.params.userID},
      { $addToSet: { friendList: req.params.friendID } },
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
  // remove from user's friend list this request friend id
  deleteFriend(req, res){
    User.findOneAndUpdate(
      { _id: req.params.userID},
      { $pull: { friendList: req.params.friendID } },
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