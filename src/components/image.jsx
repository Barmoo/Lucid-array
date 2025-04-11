import React from 'react';
import figma1 from '../assets/images/figma1.jpg';
import figma2 from '../assets/images/figma2.jpg';
import figma3 from '../assets/images/figma3.jpg';

const image = () => {
  return (
    <div className="relative -mt-32 z-10 mx-[5%]">
      {/* Add margin-bottom to create space between buttons and images */}
      <div className="mb-8"></div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* First Image */}
        <img
          src={figma1}
          alt="Project 1"
          className="h-[300px] md:h-[550px] w-full md:w-1/2 object-cover rounded-lg shadow-md"
        />
        {/* Second and Third Images in a Row */}
        <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-4">
          <img
            src={figma2}
            alt="Project 2"
            className="h-[300px] md:h-[550px] w-full md:w-1/2 object-cover object-right rounded-lg"
          />
          <img
            src={figma3}
            alt="Project 3"
            className="h-[300px] md:h-[550px] w-full md:w-1/2 object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default image;