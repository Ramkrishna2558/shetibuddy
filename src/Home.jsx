import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import cropa from "./assets/crop.webp";
import cropb from "./assets/crop2.jpg";
import { FormattedMessage, IntlProvider } from "react-intl";

const messages = {
  en: {
    title: "Group Information",
    groupNameLabel: "Group Name:",
    paymentTypeLabel: "Payment Type:",
    selectPaymentType: "Select Payment Type",
    perKiloPerAcre: "Per Kilo / Per Acre",
    perDay: "Per Day",
    workBased: "Work Based",
    amountLabel: "Amount (Per Kilo / Per Acre):",
    workBasedAmountLabel: "Amount for Work Based Payment",
    addMemberLabel: "Add Member",
    memberLabel: "Member",
    submitLabel: "Submit",
  },
  mr: {
    title: "समूह माहिती",
    groupNameLabel: "समूहाचं नाव:",
    paymentTypeLabel: "पेमेंट प्रकार:",
    selectPaymentType: "पेमेंट प्रकार निवडा",
    perKiloPerAcre: "प्रति किलो / प्रति एकर",
    perDay: "प्रति दिवस",
    workBased: "कामानुसार",
    amountLabel: "रक्कम (प्रति किलो / प्रति एकर):",
    workBasedAmountLabel: "कामानुसार पैसे",
    addMemberLabel: "सदस्य जोडा",
    memberLabel: "सदस्य",
    submitLabel: "सबमिट करा",
  },
};
const swapAnimation = {
  opacity: 0,
  x: -20,
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 100,
  },
}; 
const Home = ({ language }) => {
  const [groupName, setGroupName] = useState("");
  const [payType, setPayType] = useState("");
  const [amount, setAmount] = useState("");
  // const [members, setMembers] = useState([]);

  // const handleMemberChange = (index, key, value) => {
  //   const updatedMembers = [...members];
  //   updatedMembers[index][key] = value;
  //   setMembers(updatedMembers);
  // };

  // const handleAddMember = () => {
  //   setMembers([...members, { name: "" }]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      groupName,
      payType,
      amount,
    };

    try {
      const response = await axios.post(
        "https://localhost:5001/api/Group/Create",
        formData
      );

      if (response.ok) {
        console.log("Form data submitted successfully");
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
     <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: `url(${cropb})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <div
          className="py-6"
          style={{
            backgroundImage: `url(${cropa})`,
            backgroundSize: "cover",
            position: "absolute",
            inset: "0",
            zIndex: "-1",
          }}
        ></div>

        {/* Glass Morphism Effect */}
        <motion.div
          className="my-12"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "20px",
            backdropFilter: "blur(10px)",
            zIndex: "1",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {" "}
            <AnimatePresence mode="out-in">
              <motion.span
                key={language}
                variants={swapAnimation}
                initial="opacity"
                animate="opacity"
                exit="opacity"
              >
                <FormattedMessage id="title" />
              </motion.span>
            </AnimatePresence>   </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="groupName"
                className="block text-sm font-medium text-gray-700"
              >
                  <motion.label
                    key={language}
                    variants={swapAnimation}
                    initial="swap"
                    animate="swap"
                    exit="swap"
                  >
                    <FormattedMessage id="groupNameLabel" />
                  </motion.label>
            </label>
            <motion.input
                type="text"
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div>
             
 <motion.label  htmlFor="payType"
                className="block text-sm font-medium text-gray-700"
                  key={language}
                  variants={swapAnimation}
                  initial="swap"
                  animate="swap"
                  exit="swap"
                >
                  <FormattedMessage id="paymentTypeLabel" />
                </motion.label>           
                <motion.select
                id="payType"
                value={payType}
                onChange={(e) => setPayType(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <option value="">
                  {" "}
                  <FormattedMessage id="selectPaymentType" />
                </option>
                <option value="PerKiloPerAcre">
                  {" "}
                  <FormattedMessage id="perKiloPerAcre" />
                </option>
                <option value="PerDay">
                  {" "}
                  <FormattedMessage id="perDay" />
                </option>
                <option value="WorkBased">
                  {" "}
                  <FormattedMessage id="workBased" />
                </option>
              </motion.select>
            </div>

            {payType === "PerKiloPerAcre" && (
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage id="amount" />
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

            {payType === "PerDay" && (
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage id="amountLabel" />
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

            {payType === "WorkBased" && (
              <div>
                <p>
                  {" "}
                  <FormattedMessage id="workBasedAmountLabel" />
                </p>
              </div>
            )}

            {/* Members Section */}
            {/* <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                {" "}
                <FormattedMessage id="memberLabel" />
              </h3>
              {members.map((member, index) => (
   <motion.div
   key={index}
   className="grid grid-cols-2 gap-4 "
   initial={{ x: -20, opacity: 0 }}
   animate={{ x: 0, opacity: 1 }}
   transition={{ duration: 0.5, delay: 0.1 * index }}
 >                  <input
                    type="text"
                    placeholder="Member Name"
                    value={member.name}
                    onChange={(e) =>
                      handleMemberChange(index, "name", e.target.value)
                    }
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </motion.div>
              ))}
            </div> */}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center gap-3"
            >
              {/* <motion.button
                type="button"
                onClick={handleAddMember}
                className="inline-block bg-[#6C5F5B] text-white px-4 py-2 rounded-md hover:bg-[#74462b] focus:outline-none focus:ring focus:border-[#F6F1EE] active:bg-[#dd9266]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FormattedMessage id="addMemberLabel" />
              </motion.button> */}
              <motion.button
                type="submit"
                className="inline-block bg-[#6C5F5B] text-white px-4 py-2 rounded-md hover:bg-[#74462b] focus:outline-none focus:ring focus:border-[#F6F1EE] active:bg-[#dd9266]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FormattedMessage id="submitLabel" />
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </IntlProvider>
  );
};

export default Home;
