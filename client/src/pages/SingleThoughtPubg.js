// import React from 'react';
// import { useParams } from 'react-router-dom';

// import PubgReactionList from '../components/PubgReactionList';
// import PubgReactionForm from '../components/PubgReactionForm';

// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTPUBG } from '../utils/queries';

// const SingleThoughtPubg = (props) => {
//   const { id: thoughtpubgId } = useParams();

//   const { loading, data } = useQuery(QUERY_THOUGHTPUBG, {
//     variables: { id: thoughtpubgId },
//   });

//   const thought = data?.thoughtpubg || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="card mb-3">
//         <p className="card-header">
//           <span style={{ fontWeight: 700 }} className="text-light">
//             {thought.username}
//           </span>{' '}
//           post on {thought.createdAt}
//         </p>
//         <div className="card-body">
//           <p>{thought.thoughtText}</p>
//         </div>
//       </div>

//       {thought.reactionCount > 0 && (
//         <PubgReactionList reactions={thought.reactions} />
//       )}

//       {Auth.loggedIn() && <PubgReactionForm thoughtpubgId={thought._id} />}
//     </div>
//   );
// };

// export default SingleThoughtPubg;