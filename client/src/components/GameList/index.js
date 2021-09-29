import React from 'react';
// import { Link } from 'react-router-dom';

const GameList = () => {

    return (

        <div className="dropdown">
            <button className="dropbtn btn d-block w-30">Choose a Game</button>
            <div className="dropdown-content">
                <a href="/game/Minecraft">Minecraft</a>
                <a href="/fortnite">Fortnite</a>
                <a href="/leagueoflegends">League Of Legends</a>
                <a href="/pubg">PUBG</a>
                <a href="/apexlegends">Apex Legends</a>
            </div>
        </div>
    );
};

export default GameList;