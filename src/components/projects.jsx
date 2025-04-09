import React from 'react';
import figma4 from '../assets/images/figma4.jpg';
import figma5 from '../assets/images/figma5.jpg';

const projects = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="md:w-1/4 text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-950 mb-4">
            Expert Consultancy & IT Solutions
          </h1>
          <p className="text-gray-700 mb-4">
            We have worked on various fields of technology, and we have the experience required to help your business succeed.
          </p>
          <button className="bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600 transition text-[10px]">
            View Projects
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex flex-row gap-4 justify-center">
          <img src={figma4} alt="Project 1" className="h-96 w-80 object-cover rounded-lg shadow-md" />
          <img src={figma5} alt="Project 2" className="h-96 w-64 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default projects;