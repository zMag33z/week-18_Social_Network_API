const router = require('express').Router();

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
  
  router.route('/')
  .get(getThoughts)
  .post(createThought);
  
  router.route('/:thoughtID')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route('/:thoughtID/reactions')
  .get(getReactions)
  .post(addReaction);

  router.route('/:thoughtID/reactions/:reactionID')
  .get(getSingleReaction)
  .delete(deleteReaction);
  

module.exports = router;