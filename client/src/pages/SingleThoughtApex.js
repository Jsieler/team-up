import React from 'react';
import { useParams } from 'react-router-dom';

import ApexReactionList from '../components/ApexReactionList';
import ApexReactionForm from '../components/ApexReactionForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTAPEX } from '../utils/queries';

const SingleThoughtApex = (props) => {
  const { id: thoughtapexId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHTAPEX, {
    variables: { id: thoughtapexId },
  });

  const thought = data?.thoughtapex || {};

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
        <ApexReactionList reactions={thought.reactions} />
      )}

      {Auth.loggedIn() && <ApexReactionForm thoughtapexId={thought._id} />}
    </div>
  );
};

export default SingleThoughtApex;