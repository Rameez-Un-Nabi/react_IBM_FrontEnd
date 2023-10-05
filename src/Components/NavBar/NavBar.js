import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './NavBar.css';

const Navbar = ({ isLoggedIn, userName }) => {
  // existing code

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">  {/* Link to Home */}
          StayHealthy
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={`fa ${isActive ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <ul className={`nav__links ${isActive ? 'active' : ''}`}>
  <li className="link">
    <Link to="/">Home</Link>
  </li>
  <li className="link">
    <Link to="/appointments">Appointments</Link>
  </li>
  {isLoggedIn ? (
    <>
      <li className="link">
        {userName}
      </li>
      <li className="link">
        <button className="btn1" onClick={() => {
          sessionStorage.clear();
          window.location.reload();
        }}>Logout</button>
      </li>
    </>
  ) : (
    <>
      <li className="link">
        <Link to="/sign-up">
          <button className="btn1">Sign Up</button>
        </Link>
      </li>
      <li className="link">
        <Link to="/login">
          <button className="btn1">Login</button>
        </Link>
      </li>
    </>
  )}
</ul>
    </nav>
  );
};

export default Navbar;
