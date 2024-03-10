// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Toaster } from "sonner";
// import { motion } from "framer-motion";
// import { Typography } from "@material-tailwind/react";
// import { CircularProgress } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function CardGrid() {
//   const [groups, setGroups] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem("apitoken"); // Replace with your token retrieval logic
//       const response = await axios.get("https://localhost:5001/api/Group", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
// console.log(response.data);
//       setGroups(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleCardClick = (groupId) => {
//     navigate(`/GroupDetails/${groupId}`);
//   };

//   return (
//     <motion.div
//       className="bg-[#faf6f0ef] mb-20 w-full"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <Toaster position="top-left" />

//       <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 my-2 mx-4">
//         {groups.map((group) => (
//           <div
//             key={`group_${group.id}`}
//             className="bg-[#fcf4ff] rounded-xl shadow-lg my-1 gap-2"
//             onClick={() => handleCardClick(group.id)}
//           >
//             <Typography
//               className="mx-6 prose font-light text-sm justify-evenly"
//               style={{
//                 margin: "0.25rem 1.5rem",
//                 fontSize: "0.875rem",
//                 display: "-webkit-box",
//                 WebkitBoxOrient: "vertical",
//                 overflow: "hidden",
//                 WebkitLineClamp: 2,
//                 textOverflow: "ellipsis",
//                 whiteSpace: "pre-line",
//               }}
//             >
//               <div className="flex gap-2">
//                 <span className=" text-xs font-thin">
//                   Group Name: {group.groupName}
//                 </span>
//               </div>
//               <span className="capitalize text-start text-md items-center justify-start w-full flex">
//                 Type: {group.type}
//               </span>
//             </Typography>
//             <div className="flex justify-evenly mx-2 items-center mt-1 mb-1">
//               <span className="text-md font-normal text-[#f06384]">
//                 Created On: {group.createdOn}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Infinite Spinner Do not Modify */}
//       <div className="my-6 relative">
//         {loading && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <CircularProgress color="secondary" />
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default CardGrid;



// CardGrid.jsx
// CardGrid.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import dummy from '../assets/dummy.jpeg';
function CardGrid() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pageState, setPageState] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const loadData = async () => {
    try {
        const token = localStorage.getItem("apitoken"); 
              const response = await axios.get("https://localhost:5001/api/Group", {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const paginatedData = data.slice(
    pageState * rowsPerPage,
    pageState * rowsPerPage + rowsPerPage
  );

  const handleGroupClick = (groupId) => {
    navigate(`/MemberAttendance/${groupId}`);
  };
  const filteredData = paginatedData.filter((group) => {
    const { id, groupName, type, farmerName, city } = group;
    const lowerSearchQuery = searchQuery.toLowerCase();

    return (
      String(id).includes(lowerSearchQuery) ||
      groupName.toLowerCase().includes(lowerSearchQuery) ||
      farmerName.toLowerCase().includes(lowerSearchQuery) ||
      city.toLowerCase().includes(lowerSearchQuery)
    );
  });

  function GroupCardContent({ group }) {
    const { id, groupName, type, farmerName, createdOn, email, city, image } = group;

    const handleCardClick = () => {
      handleGroupClick(id);
    };

    return (
      <div className="bg-[#fcf4ff] rounded-xl shadow-lg my-1 gap-2 " onClick={handleCardClick}>
        <div className="aspect-[6/4] rounded-xl overflow-hidden mb-1">
        {image ? (
          <img
            src={`https://your-api-url/${image}`}
            alt={groupName}
            className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 h-full object-scale-down py-1 px-1 rounded-2xl"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
 <img
            src={dummy} 
            alt={groupName}
            className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 h-full object-scale-down py-1 px-1 rounded-2xl"
          />         
          </div>
        )}        </div>
        {/* <span className="left-0 w-18 rounded-xl ml-2 bg-veriperi-blue text-center text-xs text-white z-20 px-8">
          {city}
        </span> */}
        <Typography
          className="mx-6 prose font-light text-sm justify-evenly"
          style={{
            margin: "0.25rem 1.5rem",
            fontSize: "0.875rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
            whiteSpace: "pre-line",
          }}
        >
          {/* <div className="flex gap-2">
            <span className="text-xs font-thin">Created On: {createdOn}</span>
          </div> */}
          <Link to={`/group-details/${id}`} className="capitalize justify-center text-md items-center justify-start w-full flex text-center">
            {groupName.length > 22 ? `${groupName.slice(0, 22)}...` : groupName}
          </Link>
        </Typography>
        <div className="flex justify-evenly mx-2 items-center mt-1 mb-1 flex-col">
          {/* <span className="text-md font-normal text-[#5f5d5e]">Per Day Pay: {type === 1 ? 'Yes' : 'No'}</span> */}
          <span className="text-md font-normal text-[#f06384]">Group Owner: {farmerName}</span>
          {/* <span className="text-md font-normal text-[#f06384]">City: {city}</span> */}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-[#faf6f0ef] mb-20 w-full min-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Search Bar */}
    <div className="w-1/4 ml-6">
    <TextField
        label="Search Groups"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>

      {/* Card Component */}
      <div className="hidden sm:block">
        <div className="flex grid grid-cols-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 my-2 mx-4">
          {filteredData.map((group) => (
            <GroupCardContent key={`group_${group.id}`} group={group} />
          ))}
        </div>
      </div>

      {/* Infinite Spinner Do not Modify */}
      <div className="my-6 relative">
        {loading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <CircularProgress color="secondary" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default CardGrid;
