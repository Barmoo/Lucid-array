import React from 'react';
import Logo from '../assets/images/logo-lucid.png';

const navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-10 h-12 bg-[#091B48] flex flex-row justify-between items-center px-4'>
      {/* Left Section: Logo and Title */}
      <div className='flex flex-row items-center text-white'>
        <div className='logo p-1 flex items-center justify-center'>
          <img 
            src={Logo} 
            alt="Lucid Array Logo" 
            className='h-8 w-8 object-contain'
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        </div>
        <p className='ml-2'>Lucid Array</p>
      </div>

      {/* Right Section: Navigation Links */}
      <div>
        <ul className='flex flex-row gap-9 text-white'>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#projects">Projects</a></li>
          <li className='border-0 px-4 py-0.5 rounded-md bg-[#009EFF]'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;