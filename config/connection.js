// require mongoose to create a connection to the database
const { connect, connection } = require('mongoose');

// connect with these options
connect('mongodb://127.0.0.1/socialNetworking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export out database connection
module.exports = connection;