import React from 'react';
import { Link } from 'react-router-dom';
import imageXbox from '../Header/images/xboxIcon.png'
import imagePlaystation from '../Header/images/playstationIcon.png'
import imagePc from '../Header/images/pcIcon.png'

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="bg-dark text-light p-3">{username}, make some friends!</p>;
  }

  return (
    <div>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </h5>
      {friends.map(friend => (
        <button className="btn w-100 display-block mb-2" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
          <div></div>
          <img  className="xboxIcon" src={imageXbox} alt="xboxIcon"></img>
          <img className="playstationIcon" src={imagePlaystation} alt="playstationIcon"></img>
          <img className="pcIcon" src={imagePc} alt="pcIcon"></img>
        </button>
      ))}
    </div>
  );
};

export default FriendList;
