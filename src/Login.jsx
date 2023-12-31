import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { motion } from 'framer-motion';
import cropa from "./assets/crop.webp"; // Import the cropa image

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:5001/api/AppUser/login', formData);
      const token = response.data;
      const apitoken = token;
      localStorage.setItem('apitoken', apitoken);

      const decodedToken = jwtDecode(apitoken);
      console.log('Decoded token:', decodedToken);

      if (response.status === 200) {
        console.log('Login successful');
        navigate('/home');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials. Please check your email and password.');
      } else {
        console.error('Error during login:', error);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <motion.section
        className="flex justify-center top-0 bg-[#ED7D31] [#6C5F5B] h-screen"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url(${cropa})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="login-container justify-center flex w-3/5 lg:w-2/5 bg-opacity-75 flex-col rounded-xl my-32 "
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '10px',
            backdropFilter: 'blur(10px)',
            zIndex: '1',
          }}
        >
          <motion.form
            className="login-form flex justify-center flex-col w-full items-center"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white text-2xl mb-4">LOGIN</h2>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              className="username mb-2 p-2"
              required
              onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="password mb-2 p-2"
              required
              onChange={handleChange}
            />

            <motion.button
              type="submit"
              className="bg- text-white p-2 rounded hover:bg-[#F6F1EE]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <Link
              to="/register"
              className="registerButton bg-[#6C5F5B] text-white p-2 rounded hover:bg-[#F6F1EE]"
            >
              Register User
            </Link>
            <a href="#" className="text-white" onClick={() => alert('Forgot Password?')}>
              Forgot Password?
            </a>
          </motion.form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </motion.section>
      <footer className="text-white text-center mt-4">
        <p>2023 Made By Ramkrishna More</p>
      </footer>
    </>
  );
};

export default Login;
