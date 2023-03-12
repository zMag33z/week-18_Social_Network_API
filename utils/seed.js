const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete previous entries in the collection
  await User.deleteMany({});
  await Thought.deleteMany({});

  const seedUsers = userData();
  const createdUsers = User.collection.insertMany(seedUsers);
  await createdUsers;

  
  const seedThoughts = thoughtData();
  const createdThoughts = Thought.collection.insertMany(seedThoughts);
  await createdThoughts;

  console.table(seedUsers);
  console.table(seedThoughts);

  // console.log(createdUsers);
  // console.log(createdThoughts);

  // end runtime timer
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
