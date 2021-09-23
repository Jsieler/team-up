import React from 'react';
import FollowersList from '../components/FollowersList';
import FortniteThoughtList from '../components/FortniteThoughtList';
import FortniteThoughtForm from '../components/FortniteThoughtForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTSFORTNITE, QUERY_ME_BASIC } from '../utils/queries';
import image from '../components/GameList/images/fortnite.jpeg';
import FollowForm from '../components/FollowForm'


const Fortnite = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTSFORTNITE);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughtsfortnite = data?.thoughtsfortnite || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div>
        <img src={image} alt=""></img>
        <p>Fortnite is a battle royale game, developed by Epic Games. players drop into a map, either on their own or with a team, alongside 99 other players. After landing, it’s a mad dash to pick up as many weapons and items as possible, all while working your way toward the center of the map. Whoever is the last player/team standing wins the match.</p>
        <FortniteThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <FortniteThoughtList
              thoughtsfortnite={thoughtsfortnite}
              title="Fortnite Feed..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FollowersList
              gameName={"Fornite"}
              followerCount={2}
              followers={[
                {
                  _id: 1,
                  username: "Fix It Felix"
                },
                {
                  _id: 2,
                  username: "Bob The Builder"
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

export default Fortnite;