// Purpose: Define the routes for the user

// catch router
const router = require('express').Router();

// target user controller functionality
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// router use route for methods from user controller functions to get all or create new user
router.route('/')
.get(getUsers)
.post(createUser);

// router use route for methods from user controller functions of requested id to view/update/remove user
router.route('/:userID')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// router use route for methods from user controller functions of requested id to add/remove friend to friend list by friend id
router.route('/:userID/friends/:friendID')
.post(addFriend)
.delete(deleteFriend);

// send out router
module.exports = router;