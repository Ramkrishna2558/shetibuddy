import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import 'tailwindcss/tailwind.css';

Modal.setAppElement('#root'); 

export default function Central() {
  const [groupDetails, setGroupDetails] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [members, setMembers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    phoneNumber: '',
    userIdCity: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("apitoken"); 
        const response = await axios.get("https://localhost:5001/api/Group", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
                if (response.data) {
          setGroupDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching group details:', error);
      }
    };

    fetchData();
  }, []);

  const fetchGroupDetails = async (groupId) => {
    try {
      const response = await axios.get(`https://example.com/api/groupDetails/${groupId}`);
      if (response.data) {
        setMembers(response.data.members);
        setSelectedGroupId(groupId);
      }
    } catch (error) {
      console.error('Error fetching group details by ID:', error);
    }
  };

  const handleAddMember = async (groupId) => {
    try {
      const response = await axios.post(`https://example.com/api/GetById/${groupId}/addMember`, newMember);
      if (response.data) {
        setMembers(response.data.members);
        setAddMemberModalOpen(false);
        setNewMember({
          name: '',
          phoneNumber: '',
          userIdCity: '',
        });
      }
    } catch (error) {
      console.error('Error adding member to the group:', error);
    }
  };

  const openAddMemberModal = () => {
    setAddMemberModalOpen(true);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-[#bb2649] dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4">
                        Group Name
                      </th>
                      <th scope="col" className="p-4">
                        Pay Type Selected
                      </th>
                      <th scope="col" className="p-4">
                        Calendar Days
                      </th>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {groupDetails.map((group) => (
                      <tr key={group.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {group.groupName}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {group.payType}
                        </td>
                        
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                          <button onClick={() => fetchGroupDetails(group.id)} className="text-blue-600 dark:text-blue-500 hover:underline">
                            View Details
                          </button>
                          <button onClick={() => openAddMemberModal()} className="text-green-600 dark:text-green-500 hover:underline ml-2">
                            Add Member
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Add Member Modal */}
      <Modal
        isOpen={isAddMemberModalOpen}
        onRequestClose={() => setAddMemberModalOpen(false)}
        contentLabel="Add Member Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Add Member</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={newMember.phoneNumber}
              onChange={(e) => setNewMember({ ...newMember, phoneNumber: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userIdCity">User ID/City:</label>
            <input
              type="text"
              id="userIdCity"
              value={newMember.userIdCity}
              onChange={(e) => setNewMember({ ...newMember, userIdCity: e.target.value })}
            />
          </div>
          <div>
            <button onClick={() => handleAddMember(selectedGroupId)}>Add Member</button>
            <button onClick={() => setAddMemberModalOpen(false)}>Cancel</button>
          </div>
        </form>
      </Modal>
    </>
  );
}
