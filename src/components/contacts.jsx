import React from 'react';
import Logo from '../assets/images/logo-lucid.png';

const contacts = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col justify-center items-center bg-[#F9FAFB] text-center py-12 px-4 md:px-8"
    >
      {/* Top-Left Logo */}
      <img
        src={Logo}
        alt="Lucid Logo"
        className="absolute top-0 left-0 h-32 w-32 md:h-48 md:w-48 opacity-10"
      />

      {/* Bottom-Right Logo */}
      <img
        src={Logo}
        alt="Lucid Logo"
        className="absolute bottom-0 right-0 h-32 w-32 md:h-48 md:w-48 opacity-10"
      />

      {/* Content */}
      <p className="text-[24px] md:text-[30px] font-bold text-gray-400 mb-4 z-10">
        Let's work!
      </p>
      <p className="text-[28px] md:text-[40px] text-customGray mb-6 z-10">
        Get in touch Today
      </p>
      <p className="text-[#4C4F65] text-sm md:text-base mb-6 z-10 px-4 md:px-0">
        Let's chat about your projects, your needs, our expertise, our portfolio, and how we can join forces to create something cool!
      </p>
      <button className="border-0 px-6 py-2 rounded-md bg-blue-500 text-white text-sm md:text-base hover:bg-blue-600 transition z-10">
        Contact Us
      </button>
    </div>
  );
};

export default contacts;