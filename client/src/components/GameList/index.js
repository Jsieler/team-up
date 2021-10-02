import React from 'react';

const GameList = () => {

    return (

        <div className="dropdown">
            <button className="special-button">Choose a Game</button>
            <div className="dropdown-content">
                <a className="minecraft" href="/game/minecraft" alt="minecraft">minecraft</a>
                <a className="fortnite" href="/game/fortnite" alt="fortnite">fortnite</a>
                <a className="league" href="/game/leagueoflegends" alt="league of legends">league</a>
                <a className="pubg" href="/game/pubg" alt="player unknown battlegrounds">pubg</a>
                <a className="apex" href="/game/apexlegends" alt="apex legends">apex legends</a>
            </div>
        </div>
    );
};

export default GameList;

