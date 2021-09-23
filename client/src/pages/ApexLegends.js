import React from 'react';
import FollowersList from '../components/FollowersList';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import image from '../components/GameList/images/apex.jpeg';
import FollowForm from '../components/FollowForm'


const ApexLegends = () => {
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
            <p>
            Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called "Legends", last team standing wins</p>
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Apex Legend's Feed..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FollowersList
              gameName={"Apex Legends"}
              followerCount={2}
              followers={[
                {
                  _id: 1,
                  username: "Kayne"
                },
                {
                  _id: 2,
                  username: "Drake"
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

export default ApexLegends


