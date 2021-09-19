import React from 'react';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import GameList from '../components/GameList'

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <h1>HOME PAGE</h1>
          </div>
        ) : null}
            <GameList/>
    </main>
  );
};

export default Home;
