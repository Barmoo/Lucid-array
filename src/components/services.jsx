import React from 'react';

const services = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-[12px] font-bold text-blue-500">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Unlock Your Business Potential with Our Services
        </p>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-950 mb-2">
            Technology Consulting
          </h3>
          <p className="text-gray-600">
            We offer technology consulting for individuals as well as companies.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-950 mb-2">
            Team Building
          </h3>
          <p className="text-gray-600">
            We offer technology consulting for individuals as well as companies.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-950 mb-2">
            Business Process Improvement
          </h3>
          <p className="text-gray-600">
            We offer technology consulting for individuals as well as companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;