import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    newUsername: '',
    newPassword: '',
    securityQuestion: '',
    securityAnswer: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-dotnet-api-endpoint.com/register', formData);

      if (response.status === 200) {
        console.log('User registered successfully');
      } else {
        console.error('Registration failed');
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
    <div className="registration-container justify-center flex w-2/4 bg-slate-700 flex-col p-8">
      <h2 className="text-white text-2xl mb-4">REGISTER</h2>
      <form className="registration-form flex justify-center flex-col" onSubmit={handleSubmit}>    
        <label htmlFor="new-username">New Username:</label>
        <input
          type="text"
          id="new-username"
          className="new-username mb-2 p-2"
          required
        />

        <label htmlFor="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          className="new-password mb-2 p-2"
          required
        />

        <label htmlFor="security-question">Security Question:</label>
        <select
          id="security-question"
          className="security-question mb-2 p-2"
        >
          <option value="">Select a security question</option>
          <option value="last-name">What is your last name?</option>
          <option value="pet-name">What is your pet's name?</option>
          <option value="birth-place">What is your birthplace?</option>
          <option value="middle-name">What is your middle name?</option>
        </select>

        <label htmlFor="registration-security-answer">Security Answer:</label>
        <input
          type="text"
          id="registration-security-answer"
          className="registration-security-answer mb-2 p-2"
          required
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Register user
        </button>
        <button className="regLoginButton bg-gray-500 text-white p-2 rounded hover:bg-gray-700">
          Login Now
        </button>
      </form>
    </div>
  );
}
