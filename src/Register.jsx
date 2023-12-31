import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cropa from "./assets/crop.webp"; 

const Register = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Password: '',
    mail: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://localhost:5001/api/AppUser/ragister',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        console.log('User registered successfully');
      } else if (response.status === 201) {
        console.error('Registration with SSL certificate');
      } else {
        console.error('Error registering');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <motion.section
      className="flex justify-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${cropa})`, 
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div
        className="registration-container justify-center flex w-2/4  flex-col p-8 rounded-xl items-center text-center gap-2"
       
      >
        <div
          className="glassmorphism-container my-12 p-8"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "40px 60px",
            backdropFilter: "blur(10px)",
            zIndex: "1",
          }}
        >
          <h2 className="text-white text-2xl mb-4">REGISTER</h2>
          <motion.form
            className="registration-form flex justify-center flex-col"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="name" className="text-white">
              Name:
            </label>
            <input
              type="text"
              id="Name"
              className="new-username mb-2 p-2 rounded-lg"
              required
              onChange={handleChange}
            />

            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="text"
              id="Email"
              className="new-username mb-2 p-2 rounded-lg"
              required
              onChange={handleChange}
            />

            <label htmlFor="password" className="text-white">
              Password:
            </label>
            <input
              type="password"
              id="Password"
              className="new-password mb-2 p-2 rounded-lg"
              required
              onChange={handleChange}
            />

            <label htmlFor="mail" className="text-white">
              Mail:
            </label>
            <input
              type="text"
              id="mail"
              className="registration-security-answer mb-2 p-2 rounded-lg"
              required
              onChange={handleChange}
            />

            <motion.button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register user
            </motion.button>
          </motion.form>
          <Link className="text-white py-3 px-2 rounded-xl mt-12" to="/login">
            or Login
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Register;
