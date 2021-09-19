import React from 'react';
import { Link } from 'react-router-dom';

const GameList = () => {

    return (
        <div>
            <div><Link to="/minecraft"><button className="btn d-block w-30">Minecraft</button></Link></div>
            <div><Link to="/fortnite"><button className="btn d-block w-30">Fortnite</button></Link></div>
            <div><Link to="/leagueoflegends"><button className="btn d-block w-30">League Of Legends</button></Link></div>
            <div><Link to="/pubg"><button className="btn d-block w-30">PUBG</button></Link></div>
            <div><Link to="/apexlegends"><button className="btn d-block w-30">Apex Legends</button></Link></div>
        </div>
    );
};


export default GameList;