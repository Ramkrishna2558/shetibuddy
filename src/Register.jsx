import React from 'react'

export default function Register() {
  return (
    <div className="registration-container" style={{ display: none }}>
      <h2>REGISTER</h2>
      <form className="registration-form">
        <label htmlFor="new-username">New Username:</label>
        <input
          type="text"
          id="new-username"
          className="new-username"
          required
   
         
        />

        <label htmlFor="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          className="new-password"
          required
       
        />

        <label htmlFor="security-question">Security Question:</label>
        <select
          id="security-question"
          className="security-question"
   
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
          className="registration-security-answer"
          required
       
        />

        <button type="submit" >
          Register user
        </button>
        <button className="regLoginButton" >
          Login Now
        </button>
      </form>
    </div>
    
  )
}
