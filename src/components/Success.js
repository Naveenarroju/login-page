import React from 'react';
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './afterlogin/Home';
import Profile from './afterlogin/Profile';
import About from './afterlogin/About';

function Success() {
  return (
    <>
    <h1>Login success</h1>
    <div className='home-container'>
    <div className='links-container'>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="profile">Profile</Link></li>
        </ul>
    </div>
    <div className='page-container'>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      </div>
    </div>
    </>
  );
}

export default Success;
