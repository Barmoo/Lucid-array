import React from 'react';
import figma4 from '../assets/images/figma4.jpg';
import figma5 from '../assets/images/figma5.jpg';

const projects = () => {
  return (
    <div id="projects" className="bg-gray-100 py-8 px-4 md:px-6 h-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full md:w-[50%] text-center md:text-left p-4">
          <h1 className="text-[2rem] md:text-[4rem] font-bold text-[#131633] mb-4 leading-tight">
            Expert Consultancy & IT Solutions
          </h1>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            We have worked on various fields of technology, and we have the experience required to help your business succeed.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition text-sm md:text-base">
            View Projects
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-center gap-4">
          <img
            src={figma4}
            alt="Project 1"
            className="h-[300px] md:h-[500px] w-full md:w-96 object-cover rounded-lg shadow-md"
          />
          <img
            src={figma5}
            alt="Project 2"
            className="h-[300px] md:h-[500px] w-full md:w-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default projects;