import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_GAME } from '../utils/queries';
// import Auth from '../utils/auth';
import FollowersList from '../components/FollowersList';
import ThoughtList from '../components/ThoughtList'

// import ReactionList from '../components/ReactionList';
// import ReactionForm from '../components/ReactionForm';

const Game = () => {

    // ============== LOADS DATA ON GAME FROM DATABASE ================
    const { id: gameName } = useParams();

    // const mockData = { gameName: 'Minecraft' }
    // console.log({ id: gameName });

    const { loading, data } = useQuery(QUERY_GAME, {
        variables: { gameName }
    });

    const game = data?.game || {};

    console.log(game);

    // const game = data;
    // console.log(game);

    // ============== LOADS THOUGHT ON GAME FROM DATABASE ================

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div className="flex-row justify-space-between">
                <div>
                    <p>{game.gameName}</p>
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
            </div>
        </main >

    );

};

export default Game;