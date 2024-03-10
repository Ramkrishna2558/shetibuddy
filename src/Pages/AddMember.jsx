import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const AddMemberForm = ({ groupId, token, onMemberAdded }) => {
  const [groupMemberName, setGroupMemberName] = useState("");
  const [groupMemberMobileNumber, setGroupMemberMobileNumber] = useState("");
  const [advancePayment, setAdvancePayment] = useState("");
  const [working, setWorking] = useState("");

  const handleAddMember = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        GroupModelId: groupId,
        // groupMember: groupMemberName,
        GroupMemberMobileNumber: groupMemberMobileNumber,
        AdvancePayment: advancePayment,
        GroupMemberName: groupMemberName,
        Working: working,
        // Id: groupId,
      };

      const response = await axios.post(
        `https://localhost:5001/api/GroupMember/AddMember`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Adding member response:", response);
      onMemberAdded();
      
      // Reset form fields
      setGroupMemberName("");
      setGroupMemberMobileNumber("");
      setAdvancePayment("");
      setWorking("");
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  return (
    <div className="mt-4 w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2 text-[#bb2649] text-center">
        Add Members to the Group
      </h3>
      <form onSubmit={handleAddMember} className="space-y-4">
        <TextField
          label="Member Name"
          variant="outlined"
          fullWidth
          value={groupMemberName}
          onChange={(e) => setGroupMemberName(e.target.value)}
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          value={groupMemberMobileNumber}
          onChange={(e) => setGroupMemberMobileNumber(e.target.value)}
        />
        <TextField
          label="Advance amount"
          variant="outlined"
          fullWidth
          value={advancePayment}
          onChange={(e) => setAdvancePayment(e.target.value)}
        />
        <TextField
          label="if working? how many days"
          variant="outlined"
          fullWidth
          value={working}
          onChange={(e) => setWorking(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Member
        </Button>
      </form>
    </div>
  );
};

export default AddMemberForm;
