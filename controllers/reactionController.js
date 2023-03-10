const Reaction = require('../models/Reaction');

module.exports = {
// REPLACE ALL ""User TO Reaction"" WORDS AND WHAT NOT
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
}