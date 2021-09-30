import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FriendList from '../components/FriendList';
import xboxImage from '../images/xbox.png'
import playstationImage from '../images/playstation.png'
import pcImage from '../images/pc.png'

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';



const Profile = (props) => {

  const logIn = Auth.loggedIn();

  console.log(logIn);

  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };


  console.log(user);


  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} Page.
        </h2>


        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        )}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8 mb-5">
          <h1>My Game Platforms</h1>
        </div>

        <div className="col-12 mb-3 col-lg-8 mb-2">
          <h2><img src={xboxImage} alt=""></img> Gamertag: {user.xbox}</h2>
        </div>

        <div className="col-12 mb-3 col-lg-8 mb-2">
          <h2><img src={playstationImage} alt=""></img> Gamertag: {user.playstation}</h2>
        </div>

        <div className="col-12 mb-3 col-lg-8 mb-2">
          <h2><img src={pcImage} alt=""></img> Gamertag: {user.pc}</h2>
        </div>

        <div className="col-12 mb-3 col-lg-8">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s Posts`}
          />
        </div>

        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
            xbox={user.friends}
            playstation={user.playstation}
            pc={user.pc}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <ThoughtForm />}</div>
    </div>
  );
};

export default Profile;
