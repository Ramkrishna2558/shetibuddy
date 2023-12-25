import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Register() {
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
        console.error('Registration with ssl certificate');
      }
      else {
        console.error('error registering');
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
    <section className="flex justify-center">
      <div className="registration-container justify-center flex w-2/4 bg-slate-700 flex-col p-8 rounded-xl items-center text-center gap-2">
        <h2 className="text-white text-2xl mb-4">REGISTER</h2>
        <form className="registration-form flex justify-center flex-col" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Register user
          </button>
        </form>
        <Link className="bg-slate-300 py-3 px-2 rounded-xl "  to="/login">
        Login</Link>
      </div>
    </section>
  );
}
        