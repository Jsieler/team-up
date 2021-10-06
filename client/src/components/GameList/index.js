import React from 'react';

const GameList = () => {

    return (
        <>
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
            <div className="vertical-menu">
                <a className="Mphone" href="/game/minecraft">Minecraft</a>
                <a className="Fphone" href="/game/fortnite">Fortnite</a>
                <a className="Lphone" href="/game/leagueoflegends">League</a>
                <a className="Pphone" href="/game/pubg">Pubg</a>
                <a className="Aphone" href="/game/apexlegends">Apex Legends</a>
                <a className="Nphone" href="/game/nba">Nba2k</a>
                <a className="Hphone" href="/game/halo">Halo</a>
                <a className="Cphone" href="/game/cod">Cod</a>
            </div>
        </>
    );
};

export default GameList;

