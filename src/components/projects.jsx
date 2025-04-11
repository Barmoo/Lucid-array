import React from 'react';
import figma4 from '../assets/images/figma4.jpg';
import figma5 from '../assets/images/figma5.jpg';

const projects = () => {
  return (
    <div id="projects" className="bg-gray-100 py-8 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-[50px] font-bold text-[#131633] mb-4">
            Expert Consultancy & IT Solutions
          </h1>
          <p className="text-gray-700 mb-4 text-[10px]">
            We have worked on various fields of technology, and we have the experience required to help your business succeed.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-sm">
            View Projects
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-2/3 flex flex-row justify-center gap-2">
          <img src={figma4} alt="Project 1" className="h-96 w-80 object-cover rounded-lg shadow-md" />
          <img src={figma5} alt="Project 2" className="h-96 w-64 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default projects;