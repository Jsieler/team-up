import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_GAME } from '../utils/queries';
import Auth from '../utils/auth';
import FollowersList from '../components/FollowersList';
import ThoughtList from '../components/ThoughtList'
import GameThoughtForm from '../components/GameThoughtForm'
import FollowGameButton from '../components/FolllowGameButton'

const Game = () => {

    const loggedIn = Auth.loggedIn();


    // ============== LOADS DATA ON GAME FROM DATABASE ================

    const { id: gameUrl } = useParams();

    const { loading, data } = useQuery(QUERY_GAME, {
        variables: { gameUrl }
    });

    const game = data?.game || null;

    // ============== LOADS THOUGHT ON GAME FROM DATABASE ================

    if (loading) {
        return <div>Loading...</div>;
    }

    // LOGIC FOR IF USER TRIES TO ACCESS A GAME PAGE THAT DOESN'T EXIST
    if (game === null) {

        return (
            <main>
                <div className="flex-row justify-space-between">
                    <div>
                        <p>This game was not found!</p>
                    </div>
                </div>
            </main >

        );

    } else {

        return (
            <main>
                <div className="flex-row justify-space-between">
                    <div>
                        <h1>{game.gameName}</h1>
                        <img className="gamepage-images" src={`/images/${game.image}`} alt={game.image}></img>
                        <p>{game.description}</p>
                    </div>
                    <div>
                        <FollowersList
                            gameName={game.gameName}
                            followerCount={game.followerCount}
                            followers={game.followers}
                        />
                    </div>
                    <div>
                        <ThoughtList
                            thoughts={game.thoughts}
                            title={game.gameName}


                        />
                    </div>
                    {loggedIn ? (
                        <div>
                            <GameThoughtForm
                                gameId={game._id}
                                gameUrl={game.gameUrl}
                            />
                        </div>
                    ) : null}
                    <div>
                        <FollowGameButton
                            gameId={game._id}
                        />
                    </div>
                </div>
            </main >

        );

    }

};

export default Game;
