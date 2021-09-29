import React from 'react';
import { Link } from 'react-router-dom';

const PubgThoughtList = ({ thoughtspubg, title }) => {
  if (!thoughtspubg.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughtspubg &&
        thoughtspubg.map(thoughtpubg => (
          <div key={thoughtpubg._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thoughtpubg.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thoughtpubg.username}
              </Link>{' '}
              Post on {thoughtpubg.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thoughtpubg/${thoughtpubg._id}`}>
                <p>{thoughtpubg.thoughtText}</p>
                <p className="mb-0">
                  Comments: {thoughtpubg.reactionCount} 
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PubgThoughtList;
