import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-dotnet-api-endpoint.com/login', formData);

      if (response.status === 200) {
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
      <div className="login-container justify-center flex w-2/4 bg-slate-500 flex-col p-8 ">
        <form className="login-form flex justify-center flex-col " onSubmit={handleSubmit}>
          <h2 className="text-white text-2xl mb-4">LOGIN</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
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

          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>
          <Link
            to="/register"
            className="registerButton bg-gray-500 text-white p-2 rounded hover:bg-gray-700"
          >
            Register User
          </Link>
          <a href="#" className="text-white" onClick={() => alert('Forgot Password?')}>
            Forgot Password?
          </a>
        </form>
      </div>

      <footer className="text-white text-center mt-4">
        <p>2023 Made By Ramkrishna More</p>
      </footer>
    </>
  );
}
