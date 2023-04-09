// create variable to catch router
const router = require('express').Router();
// target user routes and thought routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// router use targets above
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// send out router
module.exports = router;