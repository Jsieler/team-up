import React from 'react';
// import { Link } from 'react-router-dom';

const GameList = () => {

    return (

    //     <button class="special-button dropdown">
    //     Choose a Game<span aria-hidden></span>
    //   </button>

    <div class="dropdown">
        <button class="special-button">Choose a Game</button>
        <div class="dropdown-content">
            <a class="minecraft" href="/minecraft" alt="minecraft">minecraft</a>
            <a class="fortnite" href="/fortnite" alt="fortnite">fortnite</a>
            <a class="league" href="/leagueoflegends" alt="league of legends">league</a>
            <a class="pubg" href="/pubg" alt="player unknown battlegrounds">pubg</a>
            <a class="apex" href="/apexlegends" alt="apex legends">apex legends</a>
        </div>
    </div>
    );
};

export default GameList;