const db = require('../config/connection');
const { Thought, User, Game } = require('../models');

db.once('open', async () => {
    // await Thought.deleteMany({});
    // await User.deleteMany({});

    // create game data
    // const gameData = [];

    const games = [
        {
            "gameUrl": "minecraft",
            "gameName": "Minecraft"
        },
        {
            "gameUrl": "fortnite",
            "gameName": "Fortnite"
        },
        {
            "gameUrl": "leagueoflegends",
            "gameName": "Leage of Legends"
        },
        {
            "gameUrl": "apexlegends",
            "gameName": "Apex"
        },
        {
            "gameUrl": "pubg",
            "gameName": "PUBG"
        }
    ]

    // for (let i = 0; i < games.length; i++) {
    //     const gameName = games[i].gameName;

    //     userData.push({ gameName });
    // }

    await Game.collection.insertMany(games);

    // const createdUsers = await User.collection.insertMany(userData);

    // // create friends
    // for (let i = 0; i < 100; i += 1) {
    //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    //     const { _id: userId } = createdUsers.ops[randomUserIndex];

    //     let friendId = userId;

    //     while (friendId === userId) {
    //         const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    //         friendId = createdUsers.ops[randomUserIndex];
    //     }

    //     await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
    // }

    // // create thoughts
    // let createdThoughts = [];
    // for (let i = 0; i < 100; i += 1) {
    //     const thoughtText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    //     const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    //     const createdThought = await Thought.create({ thoughtText, username });

    //     const updatedUser = await User.updateOne(
    //         { _id: userId },
    //         { $push: { thoughts: createdThought._id } }
    //     );

    //     createdThoughts.push(createdThought);
    // }

    // // create reactions
    // for (let i = 0; i < 100; i += 1) {
    //     const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    //     const { username } = createdUsers.ops[randomUserIndex];

    //     const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
    //     const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

    //     await Thought.updateOne(
    //         { _id: thoughtId },
    //         { $push: { reactions: { reactionBody, username } } },
    //         { runValidators: true }
    //     );
    // }

    console.log('all done!');
    process.exit(0);
});