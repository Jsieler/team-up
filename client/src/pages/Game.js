import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_GAME } from '../utils/queries';
import Auth from '../utils/auth';
import FollowersList from '../components/FollowersList';
import ThoughtList from '../components/ThoughtList'
import GameThoughtForm from '../components/GameThoughtForm'
import FollowGameButton from '../components/FolllowGameButton'

// import ReactionList from '../components/ReactionList';
// import ReactionForm from '../components/ReactionForm';

const Game = () => {

    const loggedIn = Auth.loggedIn();

    // ============== LOADS DATA ON GAME FROM DATABASE ================
    const { id: gameUrl } = useParams();

    // const mockData = { gameName: 'Minecraft' }
    // console.log(gameUrl);

    const { loading, data } = useQuery(QUERY_GAME, {
        variables: { gameUrl }
    });

    const game = data?.game || null;

    // console.log(game);

    // const game = data;
    // console.log(game);

    // ============== LOADS THOUGHT ON GAME FROM DATABASE ================

    if (loading) {
        return <div>Loading...</div>;
    }

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
                        <p>{game.gameName}</p>
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
