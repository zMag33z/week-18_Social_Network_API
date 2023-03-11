const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});

  // create users with data file
  const seedUsers = [...userData];
  const seedThoughts = [...thoughtData];

  // Wait for the users to be inserted into the database
  await User.collection.insertMany(seedUsers);
  await Thought.collection.insertMany(seedThoughts)

  console.table(seedUsers, seedThoughts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
