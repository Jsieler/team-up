import React from 'react';
// import { Link } from 'react-router-dom';

const GameList = () => {

    return (

    //     <button class="special-button dropdown">
    //     Choose a Game<span aria-hidden></span>
    //   </button>

    <div className="dropdown">
        <button className="special-button">Choose a Game</button>
        <div className="dropdown-content">
            <a className="minecraft" href="/minecraft" alt="minecraft">minecraft</a>
            <a className="fortnite" href="/fortnite" alt="fortnite">fortnite</a>
            <a className="league" href="/leagueoflegends" alt="league of legends">league</a>
            <a className="pubg" href="/pubg" alt="player unknown battlegrounds">pubg</a>
            <a className="apex" href="/apexlegends" alt="apex legends">apex legends</a>
        </div>
    </div>
    );
};

export default GameList;