
// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { TextField, Button } from "@mui/material";
// import axios from "axios";
// import { BiUser, BiMailSend } from "react-icons/bi";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { FiUsers } from "react-icons/fi";
// import { CgProfile } from "react-icons/cg";
// import cropb from "../assets/crop-farmer.webp";
// import AddMemberForm from "./AddMember";

// function GroupDetailsTable() {
//   const { groupId } = useParams();
//   const token = localStorage.getItem("apitoken");
//   const [groupDetails, setGroupDetails] = useState({});
//   const [isAddMemberFormVisible, setAddMemberFormVisible] = useState(false);

//   useEffect(() => {
//     const fetchGroupDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://localhost:5001/api/Group/GetById/${groupId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (response.data && Object.keys(response.data).length > 0) {
//           setGroupDetails(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching group details:", error);
//       }
//     };

//     fetchGroupDetails();
//   }, [groupId, token]);

//   const handleEditGroup = () => {
//     console.log("Editing group details");
//   };

//   const handleMemberAdded = () => {
//     // Logic to handle member added
//     console.log("Member added successfully");
//     // Optionally, you can update state or perform other actions here
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
//               Group Members: {groupDetails.groupMemberName || "No Members Yet"}
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
//           <Link 
//           // to='/member-details'
//             className="bg-gray-600 px-4 py-2  text-white rounded-lg"
//             onClick={() => setAddMemberFormVisible(true)}

//           >
//             Add Members
//           </Link>
//           <button className="bg-gray-600 px-4 py-2  text-white rounded-lg" onClick={handleEditGroup}>
//             Edit Group
//           </button>
//           <button className="bg-gray-600 px-4 py-2  text-white rounded-lg">View Attendance</button>
//           <button className="bg-gray-600 px-4 py-2  text-white rounded-lg">View/edit members</button>
//         </div>
//         {isAddMemberFormVisible && (
//           <AddMemberForm
//             groupId={groupId}
//             token={token}
//             onMemberAdded={handleMemberAdded}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default GroupDetailsTable;
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { BiUser, BiMailSend } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import cropb from "../assets/crop-farmer.webp";
import AddMemberForm from "./AddMember";
import { motion } from "framer-motion";
import dummy from "../assets/dummy.jpeg";

function GroupDetailsTable() {
  const { groupId } = useParams();
  const token = localStorage.getItem("apitoken");
  const [groupDetails, setGroupDetails] = useState({});
  const [members, setMembers] = useState([]);
  const [isAddMemberFormVisible, setAddMemberFormVisible] = useState(false);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5001/api/Group/GetById/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && Object.keys(response.data).length > 0) {
          setGroupDetails(response.data);
        }
      } catch (error) {
        console.error("Error fetching group details:", error);
      }
    };

    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5001/api/GetMembersByGroupId/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data) {
          setMembers(response.data);
        }
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchGroupDetails();
    fetchMembers();
  }, [groupId, token]);

  const handleEditGroup = () => {
    console.log("Editing group details");
  };

  const handleMemberAdded = () => {
    // Logic to handle member added
    console.log("Member added successfully");
    // Optionally, you can update state or perform other actions here
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${cropb})`, backgroundSize: "cover" }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-md text-center">
            <CgProfile className="text-4xl text-[#bb2649] mb-2 mx-auto" />
            <p className="text-lg text-[#853044bb] text-center">Group Name: {groupDetails.groupName}</p>
          </div>
          <div className="p-4 rounded-md text-center">
            <FiUsers className="text-4xl text-[#bb2649] mb-2 mx-auto" />
            <p className="text-lg text-[#853044bb] text-center">Group Type:  {groupDetails.type === 'PerDay' && 'Everyday/Daily Basis'}
                            {groupDetails.type === 'PerKiloPerAcre' && 'Fixed by Crop'}
                            {groupDetails.type === 'WorkBased' && 'Discussed Pay'}</p>
          </div>
          <div className="p-4 rounded-md text-center">
            <BiUser className="text-4xl text-[#bb2649] mb-2 mx-auto" />
            <p className="text-lg text-[#853044bb] text-center">Created By: {groupDetails.farmerName}</p>
          </div>
          <div className="p-4 rounded-md text-center">
            <BiMailSend className="text-4xl text-[#bb2649] mb-2 mx-auto" />
            <p className="text-lg text-[#853044bb] text-center">Email Address: {groupDetails.email}</p>
          </div>
          <div className="p-4 rounded-md text-center">
            <FiUsers className="text-4xl text-[#bb2649] mb-2 mx-auto" />
            <p className="text-lg text-[#853044bb] text-center">
              Group Members: {groupDetails.groupMemberName || "No Members Yet"}
            </p>
          </div>
          <div className="p-4 rounded-md text-center">
            <AiFillDollarCircle className="text-4xl text-[#bb2649] mb-2 mx-auto" />
            <p className="text-lg text-[#853044bb] text-center">
              Pay amount by {groupDetails.type} is {groupDetails.amount}
            </p>
          </div>
        </div>

        {/* Members section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Group Members</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {members.length > 0 ? (
              members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
                >
                  <img
                    src={dummy}
                    alt="Member"
                    className="w-24 h-24 rounded-full mb-2"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.email}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No members found.</p>
            )}
          </motion.div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <Link
            // to='/member-details'
            className="bg-gray-600 px-4 py-2  text-white rounded-lg"
            onClick={() => setAddMemberFormVisible(true)}
          >
            Add Members
          </Link>
          <button
            className="bg-gray-600 px-4 py-2  text-white rounded-lg"
            onClick={handleEditGroup}
          >
            Edit Group
          </button>
          <button className="bg-gray-600 px-4 py-2  text-white rounded-lg">
            View Attendance
          </button>
          <button className="bg-gray-600 px-4 py-2  text-white rounded-lg">
            View/edit members
          </button>
        </div>
        {isAddMemberFormVisible && (
          <AddMemberForm
            groupId={groupId}
            token={token}
            onMemberAdded={handleMemberAdded}
          />
        )}
      </div>
    </div>
  );
}

export default GroupDetailsTable;