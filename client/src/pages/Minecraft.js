import React from 'react';
import Auth from '../utils/auth';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import FollowersList from '../components/FollowersList';
import ThoughtForm from '../components/ThoughtForm';



const Minecraft = () => {

  const loggedIn = Auth.loggedIn();
  const { username: userParam } = useParams();
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



  return (
    <main>
      {loggedIn ? (
        <div className="col-12 col-lg-3 mb-3">
          <div>
            <h1>Minecraft Page</h1>
          </div>
          <div>

            <div></div>

            <FollowersList
              gameName={"Minecraft"}
              followerCount={2}
              followers={[
                {
                  username: "toto97"
                },
                {
                  username: "anthonypena97"
                }
              ]}
            />

            <ThoughtForm />

            {/* <div id="game-info">
              <img id="game-image"></img>
              <p id="dscription"></p>
            </div>

            <div id="followers"></div>

            <div id="thoughts"></div> */}

          </div>
        </div>
      ) : null}
    </main>

  );
};

export default Minecraft;