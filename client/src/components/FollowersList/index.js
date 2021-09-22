import React from 'react';
import { Link } from 'react-router-dom';



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
                <button className="btn w-100 display-block mb-2" key={follower._id}>
                    <Link to={`/profile/${follower.username}`}>{follower.username}</Link>
                </button>
            ))}
        </div>
    );
};

export default FollowersList;