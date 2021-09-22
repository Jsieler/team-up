import React from 'react';
// import React, { useState } from 'react';

// import { useMutation } from '@apollo/client';
// import { ADD_THOUGHT } from '../../utils/mutations';
// import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

const FollowForm = () => {
    // const [thoughtText, setText] = useState('');
    // const [characterCount, setCharacterCount] = useState(0);

    // const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    //     update(cache, { data: { addThought } }) {
    //         try {
    //             // update thought array's cache
    //             // could potentially not exist yet, so wrap in a try/catch
    //             const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
    //             cache.writeQuery({
    //                 query: QUERY_THOUGHTS,
    //                 data: { thoughts: [addThought, ...thoughts] },
    //             });
    //         } catch (e) {
    //             console.error(e);
    //         }

    //         // update me object's cache
    //         const { me } = cache.readQuery({ query: QUERY_ME });
    //         cache.writeQuery({
    //             query: QUERY_ME,
    //             data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
    //         });
    //     },
    // });

    // // update state based on form input changes
    // const handleChange = (event) => {
    //     if (event.target.value.length <= 280) {
    //         setText(event.target.value);
    //         setCharacterCount(event.target.value.length);
    //     }
    // };

    // // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // try {
        //     await addThought({
        //         variables: { thoughtText },
        //     });

        //     // clear form value
        //     setText('');
        //     setCharacterCount(0);
        // } catch (e) {
        //     console.error(e);
        // }
    };

    return (
        <div>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <button className="btn col-12 col-md-3" type="submit">
                    Follow
                </button>
            </form>
        </div>
    );
};

export default FollowForm;