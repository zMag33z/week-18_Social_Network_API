// require the express module
const express = require('express');
// target database for connection
const db = require('./config/connection');
// target routes folder index
const routes = require('./routes');

// localport
const PORT = 3001;
// call upon express as application
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// application use these routes
app.use(routes);

// open database and application listen on port
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});