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

    await Game.collection.insertMany(games);

    console.log('all games have been seeded! :~)');
    process.exit(0);
});