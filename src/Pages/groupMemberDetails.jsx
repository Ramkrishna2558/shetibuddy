import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import dummy from '../assets/dummy.jpeg';

function MemberAttendance() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const token = localStorage.getItem("apitoken");
        const response = await axios.get(`https://localhost:5001/api/GetMembersByGroupId/${groupId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMembers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching members:", error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <motion.div
      className="bg-[#faf6f0ef] mb-20 w-full min-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Display Member Attendance Cards */}
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <div className="text-center w-full my-6">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          members.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs">
              <img src={dummy} alt="Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <Typography className="text-center text-lg font-semibold mb-2">{member.name}</Typography>
              <Typography className="text-center text-gray-600">{member.email}</Typography>
              {/* Add attendance status here */}
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}

export default MemberAttendance;
