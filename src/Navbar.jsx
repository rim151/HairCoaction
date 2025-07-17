// Navbar.jsx
import React from 'react';
import { useState } from 'react';
import './App.css'; 
import { FaHome, FaClinicMedical, FaBook } from 'react-icons/fa';
import { FaCalendarDays } from "react-icons/fa6";
import { RiUserCommunityFill,RiAccountPinCircleFill } from "react-icons/ri"; 


function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
const [showDropdownEducation, setShowDropdownEducation] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">HairCoaction</div>
      <ul className="nav-links">
        <li><a href="#"><FaHome className="nav-icon" />Home</a></li>
        <li className="dropdown">
          <div className="dropdown-wrapper">
            <a href="#" onClick={() => setShowDropdown(!showDropdown)}>
              <FaCalendarDays className="nav-icon" /> Events
            </a>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><a href="#quizzes" onClick={() => setShowDropdown(false)}>🧠 Quizzes</a></li>
                <li><a href="#workshops" onClick={() => setShowDropdown(false)}>🛠 Workshops</a></li>
                <li><a href="#seminars" onClick={() => setShowDropdown(false)}>🎤 Seminars</a></li>
              </ul>
            )}
          </div>
        </li>

          
        <li><a href="#"><FaClinicMedical className='nav-icon'/>Consultation</a></li>
        <li><a href="#"><RiUserCommunityFill className='nav-icon'/>Community</a></li>

        <li className="dropdown">
          <div className="dropdown-wrapper">
            <a href="#" onClick={() => setShowDropdownEducation(!showDropdownEducation)}>
              <FaBook className="nav-icon" /> Education 
            </a>
            {showDropdownEducation && (
              <ul className="dropdown-menu">
                <li><a href="#blogs" onClick={() => setShowDropdownEducation(false)}>📝 Blogs</a></li>
                <li><a href="#videos" onClick={() => setShowDropdownEducation(false)}>🎥 Videos</a></li>
              </ul>
            )}
          </div>
        </li>
        <li><a href="#"><RiAccountPinCircleFill className='nav-icon'/>Login/Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
