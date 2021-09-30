import React from 'react';
// import React, { useState } from 'react';
// import { useQuery, useMutation } from '@apollo/client';
// import { ADD_FOLLOWER } from '../../utils/mutations';
// import { QUERY_MINECRAFT, QUERY_ME } from '../../utils/queries';

const FollowGameButton = (props) => {
    // const { username: userParam } = useParams();

    // const [addFollower] = useMutation(ADD_FOLLOWER);
    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //   variables: { username: userParam },
    // });
    // const user = data?.me || data?.user || {};

    // // submit form
    const handleClick = async () => {
        // try {
        //   await addFollower({
        //     variables: { id: user._id },
        //   });
        // } catch (e) {
        //   console.error(e);
        // }

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