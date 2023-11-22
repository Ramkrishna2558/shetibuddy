import { useState } from 'react'
import './App.css'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router} from "react-router-dom"; // Updated imports
import Home from './Home';

import Forgot from './forgot';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Register from './Register';
import Central from './Central';
function App() {

  return (
  <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={ <Login /> } />
    <Route path="/home" element={ <Home /> } />
    <Route path="/login" element={ <Login /> } />
    <Route path="/register" element={ <Register /> } />
    <Route path="/sidebar" element={ <Sidebar /> } />
    <Route path="/navbar" element={ <Navbar /> } />
    <Route path="/forgot" element={ <Forgot /> } />
    <Route path="/central" element={ <Central /> } />

    </Routes>
    
     </Router>
  )
}

export default App
