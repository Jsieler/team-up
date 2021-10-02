import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import teamup from './images/teamup.jpeg'

const Header = () => {


  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header className="head">
      <div className="container">

        <Link to="/">
          <img className="teamup" src={teamup} alt=""></img>
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
