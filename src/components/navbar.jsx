import React, { useState } from 'react';
import Logo from '../assets/images/logo-lucid.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-10 h-16 bg-[#091B48] flex justify-between items-center px-4 md:px-8">
      {/* Left Section: Logo and Title */}
      <div className="flex items-center text-white">
        <div className="logo p-1 flex items-center justify-center">
          <img
            src={Logo}
            alt="Lucid Array Logo"
            className="h-8 w-8 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        </div>
        <p className="ml-2 text-sm md:text-base">Lucid Array</p>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-[#091B48] md:static md:flex md:items-center md:justify-end md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-9 text-white p-4 md:p-0">
          <li>
            <a href="#services" className="hover:text-[#009EFF]">
              Services
            </a>
          </li>
          <li>
            <a href="#clients" className="hover:text-[#009EFF]">
              Clients
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#009EFF]">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="border-0 px-4 py-2 rounded-md bg-[#009EFF] hover:bg-[#007ACC] transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;