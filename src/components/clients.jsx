import React from 'react';
import figma6 from '../assets/images/figma6.jpg';
import figma7 from '../assets/images/figma7.jpg';
import figma8 from '../assets/images/figma8.jpg';
import figma9 from '../assets/images/figma9.jpg';

const clients = () => {
  return (
    <div id="clients" className="bg-white py-12 px-4">
      {/* Section Title */}
      <div className="text-center mb-8">
        <p className="text-[#10A4FF] font-semibold text-sm md:text-base">Our Clients</p>
        <p className="text-[#212440] text-[2rem] md:text-[3rem] font-bold">Success Stories:</p>
        <p className="text-[#BDBDBD] text-[2rem] md:text-[3rem]">Our Proven Track Record</p>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Client 1 */}
        <div className="text-left">
          <img
            src={figma6}
            alt="Real Estate"
            className="h-48 w-full object-cover rounded-lg shadow-md mb-4"
          />
          <h2 className="text-lg font-semibold text-blue-950">Real Estate</h2>
          <p className="text-gray-600 text-sm mt-2 leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nihil, natus doloribus dicta illum alias vero voluptatibus cupiditate aperiam.
          </p>
        </div>

        {/* Client 2 */}
        <div className="text-left">
          <img
            src={figma7}
            alt="Marketing"
            className="h-48 w-full object-cover rounded-lg shadow-md mb-4"
          />
          <h2 className="text-lg font-semibold text-blue-950">Marketing</h2>
          <p className="text-gray-600 text-sm mt-2 leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nihil, natus doloribus dicta illum alias vero voluptatibus cupiditate aperiam.
          </p>
        </div>

        {/* Client 3 */}
        <div className="text-left">
          <img
            src={figma8}
            alt="Software Technology"
            className="h-48 w-full object-cover rounded-lg shadow-md mb-4"
          />
          <h2 className="text-lg font-semibold text-blue-950">Software Technology</h2>
          <p className="text-gray-600 text-sm mt-2 leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nihil, natus doloribus dicta illum alias vero voluptatibus cupiditate aperiam.
          </p>
        </div>

        {/* Client 4 */}
        <div className="text-left">
          <img
            src={figma9}
            alt="Logistics"
            className="h-48 w-full object-cover rounded-lg shadow-md mb-4"
          />
          <h2 className="text-lg font-semibold text-blue-950">Logistics</h2>
          <p className="text-gray-600 text-sm mt-2 leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nihil, natus doloribus dicta illum alias vero voluptatibus cupiditate aperiam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default clients;