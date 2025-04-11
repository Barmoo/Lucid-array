import React from 'react';
import figma1 from '../assets/images/figma1.jpg';
import figma2 from '../assets/images/figma2.jpg';
import figma3 from '../assets/images/figma3.jpg';

const hero = () => {
  return (
    <div className="relative bg-[#081A44]">
      {/* Hero Text Section */}
      <div className="h-96 flex flex-col justify-center items-center space-y-4">
        <h2 className="text-[3rem] text-white font-semibold w-[60%] text-center">
          Technology Solutions for your Business.
        </h2>
        <p className="text-[11px] text-white">
          We build reliable and scalable technology platforms for digital business.
        </p>
        <div className="flex flex-row text-white gap-3">
          <button className="border-0 px-6 py-2 rounded-md bg-[#009EFF] text-[11px]">
            Our Work
          </button>
          <button className="border-0 px-6 py-2 rounded-md bg-[#09103D] text-[11px]">
            Contact Us
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative -mt-16">
        <div className="flex flex-row gap-4">
          {/* First Image */}
          <img
            src={figma1}
            alt="Project 1"
            className="h-[550px] w-1/2 object-cover rounded-lg shadow-md"
          />
          {/* Second and Third Images in a Row */}
          <div className="flex flex-row w-1/2 gap-4">
          
            <img
              src={figma2}
              alt="Project 2"
              className="h-[550px] w-1/2 object-cover object-right rounded-lg "
            />
            <img
              src={figma3}
              alt="Project 3"
              className="h-[550px] w-1/2 object-cover object-center rounded-md"
            />
          </div>
        </div>
      </div>

      {/* White Background Section */}
      <div className="bg-white h-[500px]"></div>
    </div>
  );
};

export default hero;