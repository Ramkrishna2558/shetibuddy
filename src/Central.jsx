import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import cropb from "./assets/crop-farmer.webp";

import { useNavigate } from "react-router-dom";

export default function Central() {
  const [groupDetails, setGroupDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  const navigate = useNavigate();

  const handleGroupClick = (groupId) => {
    navigate(`/group/${groupId}`);
  };
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
          setIsLoading(false); // Set isLoading to false after data fetch
        }
      } catch (error) {
        console.error('Error fetching group details:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <div className="div w-full min-h-screen" style={{ backgroundImage: `url(${cropb})` }}>
    <div className="max-w-2xl mx-auto bg-cover bg-center" >
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle pt-20">
              <div className="overflow-hidden">
                <motion.table
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                >
                  <thead className="bg-[#bb2649] dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4">
                        Group Name
                      </th>
                      <th scope="col" className="p-4">
                        Payment Type
                      </th>
                      <th scope="col" className="p-4">
                        Managed by
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {isLoading ? (
                      <tr>
                        <td colSpan="3" className="py-4 px-6 text-sm font-medium text-gray-900 text-center dark:text-white">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      groupDetails.map((group) => (
                        <tr key={group.id} className="hover:bg-gray-100 dark:hover:bg-gray-700" onClick={()=> handleGroupClick(group.id)}>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {group.groupName}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {group.type === 'PerDay' && 'Everyday/Daily Basis'}
                            {group.type === 'PerKiloPerAcre' && 'Fixed by Crop'}
                            {group.type === 'WorkBased' && 'Discussed Pay'}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {group.farmerName}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </motion.table>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
