import React from 'react';

const hero = () => {
  return (
    <div className="h-screen relative bg-[#081A44]">
      {/* Hero Text Section */}
      <div className="flex flex-col justify-center items-center space-y-4 h-full px-4 pb-12">
        <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] text-white font-bold w-full sm:w-[80%] md:w-[65%] text-center">
          Technology Solutions for your Business.
        </h2>
        <p className="text-[10px] sm:text-[12px] md:text-[14px] text-white text-center">
          We build reliable and scalable technology platforms for digital business.
        </p>
        <div className="flex flex-col sm:flex-row text-white gap-3">
          <button className="border-0 px-6 py-2 rounded-md bg-[#009EFF] text-[10px] sm:text-[12px]">
            Our Work
          </button>
          <button className="border-0 px-6 py-2 rounded-md bg-[#09103D] text-[10px] sm:text-[12px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;