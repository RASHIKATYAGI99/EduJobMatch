// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 style={{ color: "#fff" }}>EduJobMatch</h2>
      <div>
        <NavLink to="/" end className="nav" activeclassname="active">Home</NavLink>
        <NavLink to="/about" className="nav" activeclassname="active">About</NavLink>
        <NavLink to="/eligibility" className="nav" activeclassname="active">Eligibility</NavLink>
        <NavLink to="/contact" className="nav" activeclassname="active">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
