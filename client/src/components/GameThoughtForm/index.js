import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_GAMETHOUGHT } from '../../utils/mutations';
import { QUERY_GAME } from '../../utils/queries';

const GameThoughtForm = ({ gameId, gameUrl }) => {
	const [thoughtText, setText] = useState('');
	const [characterCount, setCharacterCount] = useState(0);

	// console.log(gameData._id);

	const [addGameThought, { error }] = useMutation(ADD_GAMETHOUGHT, {
		update(cache, { data: { addGameThought } }) {

			// console.log(addGameThought);

			// update me object's cache
			const { game } = cache.readQuery({
				query: QUERY_GAME,
				variables: { gameUrl }
			});

			cache.writeQuery({

				query: QUERY_GAME,
				data: { // Contains the data to write
					game: {
						...game,
						thoughts: [...game.thoughts, addGameThought]
					},
				},
				variables: { gameUrl }

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
		event.preventDefault();

		try {
			await addGameThought({
				variables: { gameId, thoughtText },
			});

			// console.log('thought', thought.data.addGameThought)

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
				<button className="btn col-12 col-md-3 submitButton" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default GameThoughtForm;
