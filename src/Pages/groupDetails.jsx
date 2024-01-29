// GroupDetailsTable.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { BiUser, BiMailSend } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function GroupDetailsTable() {
  const { groupId } = useParams();

  const [groupDetails, setGroupDetails] = useState({});
  const [newMember, setNewMember] = useState({
    name: "",
    phoneNumber: "",
  });
  const [isAddMemberFormVisible, setAddMemberFormVisible] = useState(false);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const token = localStorage.getItem("apitoken");
        const response = await axios.get(`https://localhost:5001/api/Group/GetById/${groupId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);

        // Check if the response contains valid data before setting group details
        if (response.data && Object.keys(response.data).length > 0) {
          setGroupDetails(response.data);
        }
      } catch (error) {
        console.error("Error fetching group details:", error);
      }
    };

    fetchGroupDetails();
  }, [groupId]);

  const handleAddMember = () => {
    // Implement your logic to add a new member to the group using API
    console.log("Adding member:", newMember);
    // Reset form fields
    setNewMember({ name: "", phoneNumber: "" });
  };

  const handleEditGroup = () => {
    // Implement your logic to edit the group details using API
    console.log("Editing group details");
  };

  return (
  <>
   <div className="justify-center flex w-full mt-12">
     <div className="bg-gradient-to-b from-sandstone-dark to-sandstone-light p-6 rounded-lg shadow-lg w-1/2 justify-center">
    {/* <h2 className="text-2xl font-semibold mb-4 text-[#53044bb]">Group Details</h2> */}

    {/* Display group details */}
    <div className="">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-glass-morph p-4 rounded-md justify-center text-center  ">
        <CgProfile className="text-4xl text-[#bb2649] mb-2  text-center flex w-full" />
        <p className="text-lg text-[#853044bb]">Group Name: {groupDetails.groupName}</p>
      </div>
      <div className="bg-glass-morph p-4 rounded-md justify-center text-center ">
        <FiUsers className="text-4xl text-[#bb2649] mb-2  text-center flex w-full" />
        <p className="text-lg text-[#853044bb]">Group Type: {groupDetails.type}</p>
      </div>
      <div className="bg-glass-morph p-4 rounded-md justify-center text-center ">
        <BiUser className="text-4xl text-[#bb2649] mb-2  text-center flex w-full" />
        <p className="text-lg text-[#853044bb]">Created By: {groupDetails.farmerName}</p>
      </div>
      <div className="bg-glass-morph p-4 rounded-md justify-center text-center ">
        <BiMailSend className="text-4xl text-[#bb2649] mb-2  text-center flex w-full" />
        <p className="text-lg text-[#853044bb]">Email Address: {groupDetails.email}</p>
      </div>
      <div className="bg-glass-morph p-4 rounded-md justify-center text-center ">
        <FiUsers className="text-4xl text-[#bb2649] mb-2  text-center flex w-full" />
        <p className="text-lg text-[#853044bb]">
          Group Members: {groupDetails.members || "No Members Yet"}
        </p>
      </div>
      <div className="bg-glass-morph p-4 rounded-md justify-center ">
        <AiFillDollarCircle className="text-4xl text-[#bb2649] mb-2  text-center flex w-full justify-center text-center flex w-full" />
        <p className="text-lg text-[#853044bb]">
          Pay amount by {groupDetails.type} is {groupDetails.amount}
        </p>
      </div>
    </div>
    </div>

   
  </div>
   </div>
   <div className="mt-4 flex justify-center gap-2">
      <button
    className="bg-gray-600 px-4 py-2  text-white rounded-lg"
        onClick={() => setAddMemberFormVisible(true)}
      >
        Add Members
      </button>
      <button className="bg-gray-600 px-4 py-2  text-white rounded-lg" onClick={handleEditGroup}>
        Edit Group
      </button>
      <button className="bg-gray-600 px-4 py-2  text-white rounded-lg">
        view attendance
      </button>
    </div>
   <div className="nextdiv flex justify-center">
     {/* Add Members Form */}
     {isAddMemberFormVisible && (
      <div className="mt-4  w-1/2 justify-center items-center">
        <h3 className="text-lg font-semibold mb-2 text-[#bb2649]">Add Members to the Group</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddMember();
          }}
        >
          <TextField
            label="Member Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newMember.phoneNumber}
            onChange={(e) => setNewMember({ ...newMember, phoneNumber: e.target.value })}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Member
          </Button>
        </form>
      </div>
    )}

  
  
   </div>
  
   </>
);
}

export default GroupDetailsTable;
