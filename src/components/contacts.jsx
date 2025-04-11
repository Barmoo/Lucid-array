import React from 'react';

const contacts = () => {
  return (
    <div id="contact" className="flex justify-center items-center bg-white">
      <div className="flex flex-col items-center p-8 rounded-lg shadow-lg max-w-md text-center">
        <p className="text-[30px] font-bold text-gray-400 mb-4">Let's work!</p>
        <p className="text-[40px] text-customGray mb-6">Get in touch Today</p>
        <div className="mb-6">
          <p className="text-gray-600">
            Let's chat about your projects, your needs, our expertise, our portfolio, and how we can join forces to create something cool!
          </p>
        </div>
        <div>
          <button className="border-0 px-6 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default contacts;