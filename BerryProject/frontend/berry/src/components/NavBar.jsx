import React from 'react';
import './NavBar.css'; // Assuming you'll add CSS for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo/Brand Name */}
      <div className="navbar-brand">
        <a href="/" className="logo">
          Berry
        </a>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>

      {/* Call-to-Action Button */}
      <div className="navbar-cta">
        <a href="/signup" className="cta-button">
          Sign Up
        </a>
      </div>

      {/* User Account Links */}
      <div className="navbar-account">
        <a href="/login">Login</a>
        <span> / </span>
        <a href="/profile">Profile</a>
      </div>

      {/* Social Media Icons */}
      <div className="navbar-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
