import React from 'react';

const GameList = () => {

    return (

        <div className="dropdown">
            <button className="special-button">Choose a Game</button>
            <div className="dropdown-content">
                <a className="minecraft" href="/game/Minecraft" alt="minecraft">minecraft</a>
                <a className="fortnite" href="/fortnite" alt="fortnite">fortnite</a>
                <a className="league" href="/leagueoflegends" alt="league of legends">league</a>
                <a className="pubg" href="/pubg" alt="player unknown battlegrounds">pubg</a>
                <a className="apex" href="/apexlegends" alt="apex legends">apex legends</a>
            </div>
        </div>
    );
};

export default GameList;
