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
                <a className="nba" href="/game/nba" alt="nba2k">nba2k</a>
                <a className="halo" href="/game/halo" alt="halo">halo</a>
                <a className="cod" href="/game/cod" alt="cod">cod</a>
            </div>
        </div>
    );
};

export default GameList;

