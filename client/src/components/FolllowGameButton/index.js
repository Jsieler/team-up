import React from 'react';
// import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FOLLOW } from '../../utils/mutations';
// import { QUERY_MINECRAFT, QUERY_ME } from '../../utils/queries';


const FollowGameButton = ({ gameId }) => {
    // const { username: userParam } = useParams();

    console.log(gameId);

    const [addFollow] = useMutation(ADD_FOLLOW);

    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //   variables: { username: userParam },
    // });
    // const user = data?.me || data?.user || {};

    // // submit form
    const handleClick = async () => {

        try {
            await addFollow({
                variables: { gameId },
            });
        } catch (e) {
            console.error(e);
            alert('You must be logged in!');
        }

    };

    return (
        <div>

            <button className="btn ml-auto" onClick={handleClick}>
                FOLLOW
            </button>

        </div>
    );
};

export default FollowGameButton;