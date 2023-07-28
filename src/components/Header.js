import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link } from "react-scroll";
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const menuRef = useRef();

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 768;
    setIsMobileView(isMobile);

    if (isMobile && menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Burger Icon (Mobile View) */}
      {isMobileView && (
        <div className="burger-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        </div>
      )}
      
      {/* Close Button (Mobile View) */}
      {menuOpen && isMobileView && (
        <div className="close-button" onClick={closeMenu}>
          <span>&times;</span>
        </div>
      )}

      {/* Burger Menu (Mobile View) */}
      {isMobileView && (
        <Menu right isOpen={menuOpen} onStateChange={handleMenuStateChange} ref={menuRef}>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
          <Link to="menu" smooth={true} duration={500} onClick={closeMenu}>Menu</Link>
          <Link to="intro" smooth={true} duration={500} onClick={closeMenu}>Reservation</Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact Us</Link>
        </Menu>
      )}

      {/* Regular Navigation (Desktop View) */}
      {!isMobileView && (
        <nav className="desktop-nav">
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
            <li><Link to="intro" smooth={true} duration={500}>Reservation</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
