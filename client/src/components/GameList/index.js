import React from 'react';
// import { Link } from 'react-router-dom';

const GameList = () => {

    return (


        // <div className="dropdown">
        //     <button className="dropbtn btn d-block w-30">Choose a Game</button>
        //     <div className="dropdown-content">
        //         <a href="/game/Minecraft">Minecraft</a>
        //         <a href="/fortnite">Fortnite</a>
        //         <a href="/leagueoflegends">League Of Legends</a>
        //         <a href="/pubg">PUBG</a>
        //         <a href="/apexlegends">Apex Legends</a>
        //     </div>
        // </div>

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
