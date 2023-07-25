import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link } from "react-scroll";
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      {/* Burger Icon */}
      <div className="burger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
      </div>
      
      {/* Close Button */}
      {menuOpen && (
        <div className="close-button" onClick={closeMenu}>
          <span>&times;</span>
        </div>
      )}

      {/* Burger Menu */}
      <Menu right isOpen={menuOpen} onStateChange={handleMenuStateChange}>
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
        <Link to="menu" smooth={true} duration={500} onClick={closeMenu}>Menu</Link>
        <Link to="intro" smooth={true} duration={500} onClick={closeMenu}>Reservation</Link>
        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact Us</Link>
      </Menu>

      {/* Regular Navigation */}
      <nav className="desktop-nav">
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
          <li><Link to="intro" smooth={true} duration={500}>Reservation</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
