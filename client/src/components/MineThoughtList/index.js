import React from 'react';
import { Link } from 'react-router-dom';

const MineThoughtList = ({ thoughtsmine, title }) => {
  if (!thoughtsmine.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughtsmine &&
        thoughtsmine.map(thoughtmine => (
          <div key={thoughtmine._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thoughtmine.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thoughtmine.username}
              </Link>{' '}
              Post on {thoughtmine.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thoughtmine/${thoughtmine._id}`}>
                <p>{thoughtmine.thoughtText}</p>
                <p className="mb-0">
                  Comments: {thoughtmine.reactionCount} 
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MineThoughtList;
