// import React from 'react';
// import FollowersList from '../components/FollowersList';
// import PubgThoughtList from '../components/PubgThoughtList';
// import PubgThoughtForm from '../components/PubgThoughtForm';
// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTSPUBG, QUERY_ME_BASIC } from '../utils/queries';
// import image from '../components/GameList/images/pubg.jpeg';
// import FollowForm from '../components/FollowForm'


// const PUBG = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTSPUBG);
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
//   const thoughtspubg = data?.thoughtspubg || [];

//   const loggedIn = Auth.loggedIn();

//   return (
//     <main>
//       <div className="flex-row justify-space-between">
//         {loggedIn && (
//           <div>
//             <img src={image} alt=""></img>
//             <p>PlауеrUnknоwn’ѕ Battlegrounds, bеttеr knоwn аѕ PUBG, іѕ a multірlауеr battle rоуаlе gаmе іn whісh players drop оntо аn іѕlаnd and fіght tо bе thе last оnе lеft standing.</p>
//             <PubgThoughtForm />
//           </div>
//         )}
//         <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <PubgThoughtList
//               thoughtspubg={thoughtspubg}
//               title="PUBG Feed..."
//             />
//           )}
//         </div>
//         {loggedIn && userData ? (
//           <div className="col-12 col-lg-3 mb-3">
//             <FollowersList
//               gameName={"PUBG"}
//               followerCount={2}
//               followers={[
//                 {
//                   _id: 1,
//                   username: "Brennan"
//                 },
//                 {
//                   _id: 2,
//                   username: "Dale"
//                 }
//               ]}
//             />
//             <FollowForm />
//           </div>
//         ) : null}
//       </div>
//     </main>
//   );


// };

// export default PUBG





