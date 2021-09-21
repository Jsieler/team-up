import React from 'react';
import { Link } from 'react-router-dom';
import image from '../GameList/images/minecraft.jpeg'


const FollowersList = ({ followerCount, gameName, followers }) => {
    if (!followers || !followers.length) {
        return <p className="bg-dark text-light p-3">this game has no followers!</p>;
    }

    return (
        <div>
            <h5>
                {gameName}'s {followerCount} {followerCount === 1 ? 'follower' : 'followers'}
            </h5>
            {followers.map(follower => (
                <button className="btn w-100 display-block mb-2" key={1}>
                    <Link to={`/profile/${follower.usernam}`}>{follower.username}</Link>
                    <div></div>
                    <img src={image}></img>
                </button>
            ))}
        </div>
    );
};

export default FollowersList;