// Description: This file is the main router for the application.

// require the express module and router
const router = require('express').Router();
// target api routes
const apiRoutes = require('./api');

// router use api routes
router.use('/api', apiRoutes);

// if no api routes hit, return 404
router.use((req, res) => {
  return res.status(404).send('HTTP 404 Not Found');
});

// export out router
module.exports = router;