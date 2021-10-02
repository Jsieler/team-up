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
            "gameName": "Minecraft",
            "description": "Minecraft is a first-person survival action / sandbox adventure game where players can gather resources, dig holes, fish, plant crops and more while at night try to avoid monsters.",
            "image": "minecraft.jpeg"
        },
        {
            "gameUrl": "fortnite",
            "gameName": "Fortnite",
            "description": "Fortnite is a battle royale game, developed by Epic Games. players drop into a map, either on their own or with a team, alongside 99 other players. After landing, it’s a mad dash to pick up as many weapons and items as possible, all while working your way toward the center of the map. Whoever is the last player/team standing wins the match.",
            "image": "fortnite.jpeg"
        },
        {
            "gameUrl": "leagueoflegends",
            "gameName": "Leage of Legends",
            "description": "Players work with their team to break the enemy Nexus before the enemy team breaks theirs. League of Legends is a complex game which involves both high-level strategy and fast-paced gameplay. Skilled players know how to beat the opponent in front of them, while keeping the macro-elements in mind to support their team to victory.",
            "image": "league.jpeg"
        },
        {
            "gameUrl": "apexlegends",
            "gameName": "Apex",
            "description": "Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called 'Legends', last team standing wins",
            "image": "apex.jpeg"
        },
        {
            "gameUrl": "pubg",
            "gameName": "PUBG",
            "description": "PlауеrUnknоwn’ѕ Battlegrounds, bеttеr knоwn аѕ PUBG, іѕ a multірlауеr battle rоуаlе gаmе іn whісh players drop оntо аn іѕlаnd and fіght tо bе thе last оnе lеft standing.",
            "image": "pubg.jpeg"
        },
        {
            "gameUrl": "cod",
            "gameName": "COD",
            "description": "Call of Duty is a first-person shooter video game",
            "image": "cod.jpeg"
        },
        {
            "gameUrl": "nba",
            "gameName": "NBA2K",
            "description": "NBA2k is a series of basketball video games developed and released annually since 1999",
            "image": "nba.jpeg"
        },
        {
            "gameUrl": "halo",
            "gameName": "Halo",
            "description": "Halo is a first-person shooter game,",
            "image": "halo.jpeg"
        }

        
    ]

    await Game.collection.insertMany(games);

    console.log('all games have been seeded! :~)');
    process.exit(0);
});