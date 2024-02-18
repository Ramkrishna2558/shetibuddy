

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { TextField, Button } from "@mui/material";
// import axios from "axios";
// import { BiUser, BiMailSend } from "react-icons/bi";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { FiUsers } from "react-icons/fi";
// import { CgProfile } from "react-icons/cg";
// import cropb from "../assets/crop-farmer.webp";

// function GroupDetailsTable() {
//   const { groupId } = useParams();
//   const token = localStorage.getItem("apitoken");

//   const [groupDetails, setGroupDetails] = useState({});
//   const [newMember, setNewMember] = useState({
//     name: "",
//     phoneNumber: "",
//   });
//   const [isAddMemberFormVisible, setAddMemberFormVisible] = useState(false);

//   useEffect(() => {
//     const fetchGroupDetails = async () => {
//       try {
//         // const token = localStorage.getItem("apitoken");
//         const response = await axios.get(`https://localhost:5001/api/Group/GetById/${groupId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log(response.data);

//         // Check if the response contains valid data before setting group details
//         if (response.data && Object.keys(response.data).length > 0) {
//           setGroupDetails(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching group details:", error);
//       }
//     };

//     fetchGroupDetails();
//   }, [groupId]);

//   const handleAddMember = () => {
//     try {
//       // const token = localStorage.getItem("apitoken");
//       const response = await axios.get(`https://localhost:5001/api/GroupMember/AddMember`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//     Implement your logic to add a new member to the group using API
//     console.log("Adding member:", newMember);
//     // Reset form fields
//     setNewMember({ name: "", phoneNumber: "" });
//   };

//   const handleEditGroup = () => {
//     // Implement your logic to edit the group details using API
//     console.log("Editing group details");
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-screen"
//       style={{ backgroundImage: `url(${cropb})`, backgroundSize: "cover" }}
//     >
//       <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-1/2">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="p-4 rounded-md text-center">
//             <CgProfile className="text-4xl text-[#bb2649] mb-2 mx-auto" />
//             <p className="text-lg text-[#853044bb] text-center">Group Name: {groupDetails.groupName}</p>
//           </div>
//           <div className="p-4 rounded-md text-center">
//             <FiUsers className="text-4xl text-[#bb2649] mb-2 mx-auto" />
//             <p className="text-lg text-[#853044bb] text-center">Group Type:  {groupDetails.type === 'PerDay' && 'Everyday/Daily Basis'}
//                             {groupDetails.type === 'PerKiloPerAcre' && 'Fixed by Crop'}
//                             {groupDetails.type === 'WorkBased' && 'Discussed Pay'}</p>
//           </div>
//           <div className="p-4 rounded-md text-center">
//             <BiUser className="text-4xl text-[#bb2649] mb-2 mx-auto" />
//             <p className="text-lg text-[#853044bb] text-center">Created By: {groupDetails.farmerName}</p>
//           </div>
//           <div className="p-4 rounded-md text-center">
//             <BiMailSend className="text-4xl text-[#bb2649] mb-2 mx-auto" />
//             <p className="text-lg text-[#853044bb] text-center">Email Address: {groupDetails.email}</p>
//           </div>
//           <div className="p-4 rounded-md text-center">
//             <FiUsers className="text-4xl text-[#bb2649] mb-2 mx-auto" />
//             <p className="text-lg text-[#853044bb] text-center">
//               Group Members: {groupDetails.members || "No Members Yet"}
//             </p>
//           </div>
//           <div className="p-4 rounded-md text-center">
//             <AiFillDollarCircle className="text-4xl text-[#bb2649] mb-2 mx-auto" />
//             <p className="text-lg text-[#853044bb] text-center">
//               Pay amount by {groupDetails.type} is {groupDetails.amount}
//             </p>
//           </div>
//         </div>
//         <div className="mt-4 flex justify-center gap-2">
//           <button
//             className="bg-gray-600 px-4 py-2  text-white rounded-lg"
//             onClick={() => setAddMemberFormVisible(true)}
//           >
//             Add Members
//           </button>
//           <button className="bg-gray-600 px-4 py-2  text-white rounded-lg" onClick={handleEditGroup}>
//             Edit Group
//           </button>
//           <button className="bg-gray-600 px-4 py-2  text-white rounded-lg">View Attendance</button>
//         </div>
//         {isAddMemberFormVisible && (
//           <div className="mt-4 w-full max-w-md mx-auto">
//             <h3 className="text-lg font-semibold mb-2 text-[#bb2649] text-center">Add Members to the Group</h3>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleAddMember();
//               }}
//               className="space-y-4"
//             >
//               <TextField
//                 label="Member Name"
//                 variant="outlined"
//                 fullWidth
//                 value={newMember.name}
//                 onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
//               />
//               <TextField
//                 label="Mobile Number"
//                 variant="outlined"
//                 fullWidth
//                 value={newMember.phoneNumber}
//                 onChange={(e) => setNewMember({ ...newMember, phoneNumber: e.target.value })}
//               />
//               <Button type="submit" variant="contained" color="primary">
//                 Add Member
//               </Button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default GroupDetailsTable;
