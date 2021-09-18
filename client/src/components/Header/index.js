import React from 'react';
import { Link } from 'react-router-dom';
import imageXbox from './images/xbox.png'
import imagePlaystation from './images/playstation.png'
import imagePC from './images/pc.png'

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Team-UP</h1>
          <img src={imageXbox}></img>
          <img src={imagePlaystation}></img>
          <img src={imagePC}></img>

        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
