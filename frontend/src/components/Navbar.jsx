import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="cont">
      <div className="logo-section">
        <svg
          className="logo-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="orange"
          viewBox="0 0 24 24"
        >
          <path d="M3 3h18v2H3V3zm0 14h18v2H3v-2zm0-7h18v2H3v-2z" />
        </svg>
        <span className="brand-name">Students Hub</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/Clubs">Club</Link></li>
        <li><Link to="/chat">Connect</Link></li>
        <li><Link to="/edit">Create Profile</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
