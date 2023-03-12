const usernames = [
  'shakydaffy',
  'traitflow',
  'bassmeatball',
  'huggingstress',
  'lazygenetic',
  'educatorchild',
  'undertakerspecies',
  'veganshore',
  'bicyclistnegotiate',
  'perkybathtub',
  'linkcaroling',
  'sphericalpassel',
  'metalplenty',
  'goodscented'
];


const emails = [
  'shakydaffy@hobbist.com',
  'traitflow@gilder.net',
  'bassmeatball@metalink.net',
  'huggingstress@gmail.com',
  'lazygenetic@gilder.net',
  'educatorchild@yahoo.com',
  'undertakerspecies@metalink.net',
  'veganshore@metalink.net',
  'bicyclistnegotiate@hobbist.com',
  'perkybathtub@aol.com',
  'linkcaroling@gilder.net',
  'sphericalpassel@gmail.com',
  'metalplenty@hobbist.com',
  'goodscented@metalink.net'
];


const thoughts = [
  'Decision Trackers are awesome',
  'Find My Phone is a useful app',
  'Learn Piano is not very good for learning Piano',
  'Starbase Defender is a great game, I love it',
  'Tower Defense is okay',
  'Monopoly Money is better than real money IMO',
  'Movie trailers are just the best parts of a movie distilled into 90 seconds',
  'Hello world, this is a comment',
  'Social media is a big waste of time',
  'Notes is my most used app',
  'Messages is open on my computer 24/7',
  'Email is open on my computer',
  'Man my brain is overwhelmed.', 
  'Firefox is great for privacy',
];

const reactions = [
  'WHAT?  Decision maker is what i need about now.',
  `gps sometimes doesn't work on my phone :(.  Guess i should move out of this metal box.`,
  `most things that are made for something specific don't work`,
  `i prefer free roaming games personally, but i might try it out.`,
  `never heard of it,`,
  `wish i had money to compare.`,
  `yeah sometimes they give too much away right before the movie`,
  `most found coding comment ever`,
  `for some it isn't a waste of time but rather gives other time to do something`,
  `hahah i'm stuck on instagram`,
  `messages are open or the app message is open.  i'm lost`,
  `well then close it.`,
  `same here.  dunno know if i'm coming or going.`,
  `dun't know about that.  sure there are more secure options out there.`,
];

const myrandomFriends = (notmany, thisUser)=> {
  const newFriends = [];
  for(let i = 0; i < notmany; i++){
    const thisFriend = usernames[Math.floor(Math.random() * usernames.length)];
    let previousFriend;
    if(thisUser === thisFriend){
      previousFriend = thisFriend;
    }else{
    newFriends.push(thisFriend);
    }
  }
  return newFriends;
};

const userData = () => {
  const userSeeds = [];
  for(let i = 0; i < usernames.length; i++){
    const thisUser = usernames[i];
    userSeeds.push(
      {
        username: thisUser,
        email: emails[i],
        // friendList: myrandomFriends(2, thisUser),
      }
    );
  }
  return [...userSeeds];
};

const thoughtData = () => {
  const newThought = [];
  for(let i = 0; i < thoughts.length; i ++){
    newThought.push(
      {
        username: usernames[i],
        text: thoughts[i]
      }
    );
  }
  return newThought;
}

// Export object functions to seed.js
module.exports = { userData, thoughtData };
  