import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Home = () => {
  const [groupName, setGroupName] = useState('');
  const [payType, setPayType] = useState(''); 
  const [amount, setAmount] = useState('');
  const [members, setMembers] = useState([]); 

  const handleMemberChange = (index, key, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][key] = value;
    setMembers(updatedMembers);
  };

  const handleAddMember = () => {
    setMembers([...members, { name: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    const formData = {
      groupName,
      payType,
      amount,
      members
    };

    try {
      const response = await axios.post('https://localhost:5001/api/Group/Create', formData);

      if (response.ok) {
        console.log('Form data submitted successfully');
      } else {
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8"
  >      <h2 className="text-2xl font-semibold mb-4">Group Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">
            Group Name:
          </label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>




        <div>
          <label htmlFor="payType" className="block text-sm font-medium text-gray-700">
            Payment Type:
          </label>
          <select
            id="payType"
            value={payType}
            onChange={(e) => setPayType(e.target.value)}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Payment Type</option>
            <option value="PerKiloPerAcre">Per Kilo / Per Acre</option>
            <option value="PerDay">Per Day</option>
            <option value="WorkBased">Work Based</option>
          </select>
        </div>

        {payType === 'PerKiloPerAcre' && (
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount (Per Kilo / Per Acre):
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        )}

        {payType === 'PerDay' && (
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount (Per Day):
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        )}

        {payType === 'WorkBased' && (
          <div>
            <p>Amount for Work Based Payment</p>
          </div>
        )}


   {/* Members Section */}
   <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Members</h3>
          {members.map((member, index) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Member Name"
                value={member.name}
                onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
           
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMember}
            className="mt-2 inline-block bg-[#6C5F5B] text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 active:bg-indigo-800"
          >
            Add Member
          </button>
        </div>


    <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
        <button
          type="submit"
          className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 active:bg-indigo-800"
        >
          Submit
        </button></motion.div>
      </form>
    </motion.div>
  );
};

export default Home;
