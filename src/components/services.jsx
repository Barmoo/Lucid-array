import React from 'react';
import Frame from '../assets/images/Frame 1065.png';
import Frame1 from '../assets/images/Frame 1066.png';
import Frame2 from '../assets/images/Frame 1067.png';

const services = () => {
  return (
    <div id="services" className="bg-white py-12 px-4 md:py-20 md:px-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-[12px] font-bold text-blue-500">Our Services</h2>
        <p className="text-[#131633] font-bold text-[3rem] mt-2">
          Unlock Your Business Potential
        </p>
        <p className="font-extrabold text-[2rem] text-gray-700">with Our Services</p>
      </div>

      {/* Services List */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <img src={Frame} alt="Frame" className="mb-4" />
            <h3 className="text-xl font-semibold text-blue-950 mb-2">
              Technology Consulting
            </h3>
            <p className="text-gray-800">
              We offer technology consulting for individuals as well as companies.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <img src={Frame1} alt="Frame1" className="mb-4" />
            <h3 className="text-xl font-semibold text-blue-950 mb-2">
              Team Building
            </h3>
            <p className="text-gray-800">
              We offer technology consulting for individuals as well as companies.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <img src={Frame2} alt="Frame2" className="mb-4" />
            <h3 className="text-xl font-semibold text-blue-950 mb-2">
              Business Process Improvement
            </h3>
            <p className="text-gray-800">
              We offer technology consulting for individuals as well as companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;