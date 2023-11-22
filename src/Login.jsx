import React from 'react'
import '../src/Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
 <>

    <div className="login-container">
        
        <form className="login-form">
            <h2>LOGIN</h2>
            <label for="username">Username:</label>
            <input type="text" className="username" required/>
            
            <label for="password">Password:</label>
            <input type="password" className="password" required/>

            <button type="submit">Login</button>
            <button className="registerButton" onclick="">Register User</button>
            <a href="#" onclick="">Forgot Password?</a>

        </form>

    </div>
    
    <footer>
        <p>2023 Made By Ramkrishna More</p>
    </footer>
 
 </>
  );
}
