import React from 'react';
import { Link } from 'react-router-dom';

const ApexThoughtList = ({ thoughtsapex, title }) => {
  if (!thoughtsapex.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughtsapex &&
        thoughtsapex.map(thoughtapex => (
          <div key={thoughtapex._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thoughtapex.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thoughtapex.username}
              </Link>{' '}
              Post on {thoughtapex.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thoughtapex/${thoughtapex._id}`}>
                <p>{thoughtapex.thoughtText}</p>
                <p className="mb-0">
                  Comments: {thoughtapex.reactionCount} 
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ApexThoughtList;
