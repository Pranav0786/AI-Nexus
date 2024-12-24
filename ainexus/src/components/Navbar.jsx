import React, { useState } from 'react';
import logo from '../assests/logo2.png';
import './Navbar.css';
import { Link } from 'react-scroll'; 

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav  className={nav ? "nav active" : "nav"}>
      {/* Logo on the Left */}
      <div className="logo">
        <Link to="#">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Centered Menu */}
      <ul className="menu">
        <li><Link to="home" smooth={true}>Home</Link></li>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="sponsors" smooth={true}>Sponsors</Link></li>
        <li><Link to="faq" smooth={true}>FAQ</Link></li>
      </ul>

      {/* Register Button on the Right */}
      <div>
        <Link to="register" smooth={true} className="register-btn">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;