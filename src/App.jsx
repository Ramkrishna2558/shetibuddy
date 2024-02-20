import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Forgot from './Forgot';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Register from './Register';
import Central from './Central';
import Login from './Login';
import CardGrid from './Pages/Groups';
import GroupDetailsTable from './Pages/groupDetails';
import AddMemberForm from './Pages/AddMember';

function App() {
  const [language, setLanguage] = useState('en'); 

  return (
    <Router>
      <Navbar setLanguage={setLanguage} language={language} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home language={language} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/navbar" element={<Navbar setLanguage={setLanguage} language={language} />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/central" element={<Central />} />
        <Route path="/groups" element={<CardGrid />} />
        <Route path="/member-details" element={<AddMemberForm />} />
        <Route path="/group/:groupId" element={<GroupDetailsTable />} />
      </Routes>
    </Router>
  );
}

export default App;
