import React from 'react';
import Frame from '../assets/images/Frame 1065.png';
import Frame1 from '../assets/images/Frame 1066.png';
import Frame2 from '../assets/images/Frame 1067.png';

const services = () => {
  return (
    <div id="services" className="bg-white py-12 px-4 md:py-20 md:px-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-[16px] md:text-[20px] font-bold text-[#009EFF] -mt-4 md:-mt-10">
          Our Services
        </h2>
        <p className="text-[#131633] font-bold text-[2rem] md:text-[3rem] mt-2">
          Unlock Your Business Potential
        </p>
        <p className="font-bold text-[1.5rem] md:text-[3rem] text-[#BDBDBD]">
          with Our Services
        </p>
      </div>

      {/* Services List */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-4 md:p-6">
            <img src={Frame} alt="Frame" className="mb-4 w-full h-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-blue-950 mb-2">
              Technology Consulting
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              We offer technology consulting for individuals as well as companies.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow">
            <img src={Frame1} alt="Frame1" className="mb-4 w-full h-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-blue-950 mb-2">
              Team Building
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              We offer technology consulting for individuals as well as companies.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow">
            <img src={Frame2} alt="Frame2" className="mb-4 w-full h-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-blue-950 mb-2">
              Business Process Improvement
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              We offer technology consulting for individuals as well as companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;