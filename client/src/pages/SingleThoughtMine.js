import React from 'react';
import { useParams } from 'react-router-dom';

import MineReactionList from '../components/MineReactionList';
import MineReactionForm from '../components/MineReactionForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTMINE } from '../utils/queries';

const SingleThoughtMine = (props) => {
  const { id: thoughtmineId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHTMINE, {
    variables: { id: thoughtmineId },
  });

  const thought = data?.thoughtmine || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>{' '}
          post on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {thought.reactionCount > 0 && (
        <MineReactionList reactions={thought.reactions} />
      )}

      {Auth.loggedIn() && <MineReactionForm thoughtmineId={thought._id} />}
    </div>
  );
};

export default SingleThoughtMine;