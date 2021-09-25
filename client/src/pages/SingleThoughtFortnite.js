import React from 'react';
import { useParams } from 'react-router-dom';

import FortniteReactionList from '../components/FortniteReactionList';
import FortniteReactionForm from '../components/ForniteReactionForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTFORTNITE } from '../utils/queries';

const SingleThoughtFortnite = (props) => {
  const { id: thoughtfortniteId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHTFORTNITE, {
    variables: { id: thoughtfortniteId },
  });

  const thought = data?.thoughtfortnite || {};

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
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {thought.reactionCount > 0 && (
        <FortniteReactionList reactions={thought.reactions} />
      )}

      {Auth.loggedIn() && <FortniteReactionForm thoughtfortniteId={thought._id} />}
    </div>
  );
};

export default SingleThoughtFortnite;