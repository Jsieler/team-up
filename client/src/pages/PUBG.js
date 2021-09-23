import React from 'react';
import FollowersList from '../components/FollowersList';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import image from '../components/GameList/images/pubg.jpeg';
import FollowForm from '../components/FollowForm'


const PUBG = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div>
            <img src={image} alt=""></img>
            <p>Players work with their team to break the enemy Nexus before the enemy team breaks theirs. League of
              Legends is a complex game which involves both high-level strategy and fast-paced gameplay. Skilled
              players know how to beat the opponent in front of them, while keeping the macro-elements in mind to
              support their team to victory.</p>
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="PUBG Feed..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FollowersList
              gameName={"PUBG"}
              followerCount={2}
              followers={[
                {
                  _id: 1,
                  username: "Brennan"
                },
                {
                  _id: 2,
                  username: "Dale"
                }
              ]}
            />
            <FollowForm />
          </div>
        ) : null}
      </div>
    </main>
  );


};

export default PUBG





