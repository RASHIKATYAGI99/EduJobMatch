import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(90deg, #0078d7, #00bcd4);
            padding: 16px 32px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .navbar h2 {
            font-size: 24px;
            color: #fff;
            margin: 0;
            font-weight: bold;
            letter-spacing: 1px;
          }

          .navbar div {
            display: flex;
            gap: 18px;
          }

          .nav {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            position: relative;
            transition: color 0.3s ease;
          }

          .nav:hover {
            color: #ffd700;
          }

          .active {
            color: #ffd700;
            font-weight: 600;
          }

          /* Optional underline effect for active links */
          .active::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 100%;
            height: 2px;
            background-color: #ffd700;
            border-radius: 2px;
          }

          @media (max-width: 768px) {
            .navbar {
              flex-direction: column;
              align-items: flex-start;
              padding: 20px;
            }
            .navbar div {
              flex-direction: column;
              gap: 12px;
              margin-top: 10px;
            }
            .nav {
              font-size: 18px;
            }
          }
        `}
      </style>

      <nav className="navbar">
        <h2>EduJobMatch</h2>
        <div>
          <NavLink to="/" end className="nav" activeClassName="active">Home</NavLink>
          <NavLink to="/about" className="nav" activeClassName="active">About</NavLink>
          <NavLink to="/eligibility" className="nav" activeClassName="active">Eligibility</NavLink>
          <NavLink to="/contact" className="nav" activeClassName="active">Contact</NavLink>
          <NavLink to="/jobs" className="nav" activeClassName="active">Jobs</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;