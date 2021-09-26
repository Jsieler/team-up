import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_THOUGHTMINE } from '../../utils/mutations';
import { QUERY_THOUGHTSMINE, QUERY_ME } from '../../utils/queries';

const MineThoughtForm = () => {
  const [thoughtText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addThoughtMine, { error }] = useMutation(ADD_THOUGHTMINE, {
    update(cache, { data: { addThoughtMine } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { thoughtsmine } = cache.readQuery({ query: QUERY_THOUGHTSMINE });
        cache.writeQuery({
          query: QUERY_THOUGHTSMINE,
          data: { thoughtsmine: [addThoughtMine, ...thoughtsmine] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughtsmine: [...me.thoughtsmine, addThoughtMine] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    // event.preventDefault();

    try {
      await addThoughtMine({
        variables: { thoughtText },
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="..."
          value={thoughtText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MineThoughtForm;
