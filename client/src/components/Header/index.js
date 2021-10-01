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


    <header className="bg-secondary mb-4 py-2 flex-row align-center yellow">
      <div className="container flex-row justify-space-between-lg justify-center align-center vex">
        <Link to="/" className="move-left">

          <h1 class= "team">Team-UP</h1>
          <>
        <div className = "icon">
          <img src={imageXbox} alt=""></img>
          <img src={imagePlaystation} alt=""></img>
          <img src={imagePC} alt=""></img>
        </div>
        </>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile" className="btn">Me</Link>
              <a className="btn" href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/signup" className="btn">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
