import React from 'react';
import { Link } from 'react-router-dom';

const FortniteThoughtList = ({ thoughtsfortnite, title }) => {
  if (!thoughtsfortnite.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughtsfortnite &&
        thoughtsfortnite.map(thoughtfortnite => (
          <div key={thoughtfortnite._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thoughtfortnite.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thoughtfortnite.username}
              </Link>{' '}
              Post on {thoughtfortnite.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thoughtfortnite/${thoughtfortnite._id}`}>
                <p>{thoughtfortnite.thoughtText}</p>
                <p className="mb-0">
                  Comments: {thoughtfortnite.reactionCount} 
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FortniteThoughtList;
