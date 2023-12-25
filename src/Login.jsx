import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

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
      <section className="flex justify-center top-0 bg-[#ED7D31] [#6C5F5B]">
        <div className="login-container justify-center flex w-2/5 bg-[#4F4A45] flex-col p-8 rounded-xl">
          <form className="login-form flex justify-center flex-col w-full items-center" onSubmit={handleSubmit}>
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

            <button type="submit" className="bg- text-white p-2 rounded hover:bg-[#F6F1EE]">
              Login
            </button>
            <Link
              to="/register"
              className="registerButton bg-[#6C5F5B] text-white p-2 rounded hover:bg-[#F6F1EE]"
            >
              Register User
            </Link>
            <a href="#" className="text-white" onClick={() => alert('Forgot Password?')}>
              Forgot Password?
            </a>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </section>
      <footer className="text-white text-center mt-4">
        <p>2023 Made By Ramkrishna More</p>
      </footer>
    </>
  );
};

export default Login;
