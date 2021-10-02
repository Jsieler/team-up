import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import useSound from 'use-sound';

import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FriendList from '../components/FriendList';
import xboxImage from '../images/xbox.jpeg'
import playstationImage from '../images/playstation.jpeg'
import pcImage from '../images/pc.jpeg'

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';



const Profile = () => {

  // VARIABLES FOR MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // LOGIC FOR SOUND
  const [play] = useSound('/sounds/friend.wav');

  // LOGIC FOR CHECKING IF USER IS LOGGED IN
  // const logIn = Auth.loggedIn();

  // RETRIEVING USER ID FROM URL
  const { username: userParam } = useParams();

  // MUTATIONS IMPORTED FOR PAGE USE
  const [addFriend] = useMutation(ADD_FRIEND);

  // LOADING USER DATA
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  // MESSAGE WHILE DATA IS LOADING
  if (loading) {
    return <div>Loading...</div>;
  }

  // MESSAGE IF USER IS NOT LOGGED IN
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

      handleShow();

      play();

    } catch (e) {
      console.error(e);
    }

  };


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

      <div className="col-12 col-lg-1 mb-3">
          <h2><img className="xbox" src={xboxImage} alt=""></img> {user.xbox}</h2>
          <h2><img className="playstation" src={playstationImage} alt=""></img> {user.playstation}</h2>
          <h2><img className="xbox" src={pcImage} alt=""></img> {user.pc}</h2>
        </div>

        <div className="col-12 mb-3 col-lg-6 pl-5">
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

       

        <Modal className="friend-modal" show={show} onHide={handleClose}>
          <img src="/images/smiley.png" className="smiley-face" alt="friend-added" />
          <p className="smiley-text">ADDED!</p>
        </Modal>

      </div>
      <div className="mb-3">{!userParam && <ThoughtForm />}</div>
    </div >
  );
};


export default Profile;
