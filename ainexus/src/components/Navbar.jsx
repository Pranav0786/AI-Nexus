import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav
      className={
        scroll
          ? "w-full fixed z-40 border border-gray-800 bg-black rounded-b-xl p-4 shadow-[0_4px_10px_rgba(0,0,0,0.5)] opacity-90 overflow-hidden"
          : "w-full fixed z-40 bg-black p-4 shadow-none opacity-90 overflow-hidden"
      }
    >
      {/* MLSC text on the Left */}
      <div className="flex items-center justify-between lg:w-10/12 w-full mx-auto max-w-[100vw]">
        <div>
            <Link
            to="home"
            smooth={true}
            className="text-base lg:text-2xl text-white font-extrabold drop-shadow-lg font-[Roboto] cursor-pointer"
            >
            WCE-MLSC PRESENTS
            </Link>

        </div>

        {/* Centered Navigation links for desktop */}
        <nav className="hidden lg:flex justify-end">
          <ul className="flex items-center gap-4 font-sans xl:text-lg text-white uppercase">
            <li>
              <Link
                to="home"
                smooth={true}
                className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-[rgb(132,153,165)] shadow-sm font-bold cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-[rgb(132,153,165)] shadow-sm font-bold cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="sponsors"
                smooth={true}
                className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-[rgb(132,153,165)] shadow-sm font-bold cursor-pointer"
              >
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-[rgb(132,153,165)] shadow-sm font-bold cursor-pointer"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden p-2 text-white "
          onClick={() => setNav(!nav)}
        >
          <FaBars className="text-white font-bold text-xl mr-1" />
        </button>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="lg:hidden fixed top-0 right-0 w-full bg-black flex flex-col items-center text-center p-4 text-white text-xl z-50 max-w-[100vw]">
          <button
            className="self-end text-white font-bold text-4xl mr-3"
            onClick={() => setNav(false)}
          >
            &times;
          </button>
          <div className="flex flex-col space-y-4 uppercase">
            <Link
              to="home"
              smooth={true}
              className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-[rgb(132,153,165)] shadow-sm font-bold cursor-pointer"
              onClick={() => setNav(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-[rgb(132,153,165)] shadow-sm font-bold cursor-pointer"
              onClick={() => setNav(false)}
            >
              About
            </Link>
            <Link
              to="sponsors"
              smooth={true}
              className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-[rgb(132,153,165)] shadow-sm font-bold cursor-pointer"
              onClick={() => setNav(false)}
            >
              Sponsors
            </Link>
            <Link
              to="faq"
              smooth={true}
              className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-[rgb(132,153,165)] shadow-sm font-bold cursor-pointer"
              onClick={() => setNav(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
