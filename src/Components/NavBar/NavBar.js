import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './NavBar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">  {/* Use Link here */}
          StayHealthy
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={`fa ${isActive ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <ul className={`nav__links ${isActive ? 'active' : ''}`}>
        <li className="link">
          <Link to="/">Home</Link>  {/* Use Link here */}
        </li>
        <li className="link">
          <Link to="/appointments">Appointments</Link>  {/* Use Link here */}
        </li>
        <li className="link">
          <Link to="/sign-up">  {/* Use Link here */}
            <button className="btn1">Sign Up</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/login">  {/* Use Link here */}
            <button className="btn1">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
