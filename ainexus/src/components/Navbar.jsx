import React, { useState } from 'react';
import logo from '../assests/logo.jpeg';
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
    <nav className={nav ? "nav active" : "nav"}>
      {/* Logo on the Left */}
      <div className="logo">
        <Link to="#">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Centered Menu */}
      <ul className="menu">
        <li><Link to="#" smooth={true}>Home</Link></li>
        <li><Link to="#" smooth={true}>About</Link></li>
        <li><Link to="#" smooth={true}>Sponsors</Link></li>
        <li><Link to="#" smooth={true}>FAQ</Link></li>
      </ul>

      {/* Register Button on the Right */}
      <div>
        <Link to="#" className="register-btn">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;