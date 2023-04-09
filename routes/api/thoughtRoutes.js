// Description: This file contains the routes for the thought model

// catch router
const router = require('express').Router();

// target thought controller functionality
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    getReactions,
    getSingleReaction,
    updateReaction,
    addReaction,
    deleteReaction,
  } = require('../../controllers/thoughtController');
  
  // router use route for methods from thought controller functions
  router.route('/')
  .get(getThoughts)
  .post(createThought);

  // router use route for methods from thought controller functions of requested id
  router.route('/:thoughtID')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  // router use route for methods from thought controller functions of requested id to view all reaction or add reaction to reaction list
  router.route('/:thoughtID/reactions')
  .get(getReactions)
  .post(addReaction);

  // router use route for methods from thought controller functions of requested id to view/delete reaction to reaction list by reaction id
  router.route('/:thoughtID/reactions/:reactionID')
  .get(getSingleReaction)
  .delete(deleteReaction);
  

module.exports = router;