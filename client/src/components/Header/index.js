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

    <header className="head">
      <div className="container">

        <Link to="/">
          <img src={imageXbox} alt=""></img>
          <img src={imagePlaystation} alt=""></img>
          <img src={imagePC} alt=""></img>
          <h1>Team UP</h1>
        </Link>

        <nav>
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
