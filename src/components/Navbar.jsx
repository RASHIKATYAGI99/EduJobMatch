// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 style={{ color: "#fff" }}>EduJobMatch</h2>
      <div>
       <NavLink to="/" end className="nav" activeClassName="active">Home</NavLink>
<NavLink to="/about" className="nav" activeClassName="active">About</NavLink>
<NavLink to="/eligibility" className="nav" activeClassName="active">Eligibility</NavLink>
<NavLink to="/contact" className="nav" activeClassName="active">Contact</NavLink>


      </div>
    </nav>
  );
};

export default Navbar;
