// import React from 'react';
// import FollowersList from '../components/FollowersList';
// import MineThoughtList from '../components/MineThoughtList';
// import MineThoughtForm from '../components/MineThoughtForm';
// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTSMINE, QUERY_ME_BASIC } from '../utils/queries';
// import image from '../components/GameList/images/minecraft.jpeg';
// import FollowForm from '../components/FollowForm'


// const Minecraft = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTSMINE);
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
//   const thoughtsmine= data?.thoughtsmine || [];

//   const loggedIn = Auth.loggedIn();

//   return (
//     <main>
//       <div className="flex-row justify-space-between">
//         {loggedIn && (
//           <div>
//             <img src={image} alt=""></img>
//             <p>
//             Minecraft is a first-person survival action / sandbox adventure game where players can gather resources, dig holes, fish, plant crops and more while at night try to avoid monsters.</p>
//             <MineThoughtForm />
//           </div>
//         )}
//         <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <MineThoughtList
//               thoughtsmine={thoughtsmine}
//               title="Minecraft Feed..."
//             />
//           )}
//         </div>
//         {loggedIn && userData ? (
//           <div className="col-12 col-lg-3 mb-3">
//            <FollowersList
//               gameName={"Minecraft"}
//               followerCount={2}
//               followers={[
//                 {
//                   _id: 1,
//                   username: "toto97"
//                 },
//                 {
//                   _id: 2,
//                   username: "anthonypena97"
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

// export default Minecraft