import React from 'react';
import Logo from '../assets/images/Vector.png';
import fig23 from '../assets/images/fig23.png';

const contacts = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col justify-center items-center bg-[#F9FAFB] text-center py-12 px-4 md:px-8 h-[100vh]"
    >
      {/* Top-Left Logo */}
      <img
        src={Logo}
        alt="Lucid Logo"
        className="absolute left-0.5 top-0.5"
      />

      {/* Bottom-Right Logo */}
      <img
        src={fig23}
        alt="Lucid Logo"
        className="absolute right-2 bottom-0"
      />

      {/* Content */}
      <p className="text-[24px] md:text-[30px] font-bold text-gray-400 mb-4 z-10">
        Let's work!
      </p>
      <p className="text-[4rem] md:text-[40px] text-[#30324C] mb-6 z-10 font-extrabold ]">
        Get in touch Today
      </p>
      <p className="text-[#5B5D71] text-[10px] md:text-[15px] mb-6 z-10 px-4 md:px-0 from-neutral-300">
         Let's chat about your projects, your needs, our expertise, our portfolio, and how we can join forces
      <br />
          to create something cool!
      </p>
      <button className="border-0 px-6 py-2 rounded-md bg-[#009EFF] text-white text-sm md:text-base hover:bg-blue-600 transition z-10">
        Contact Us
      </button>
    </div>
  );
};

export default contacts