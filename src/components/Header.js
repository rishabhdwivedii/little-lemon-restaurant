import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
