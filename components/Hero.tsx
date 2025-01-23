import React from "react";
import {Search} from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center data-twe-lazy-load-init data-twe-lazy-sr min-h-[250px] sm:min-h-[300px] md:min-h-[390px] w-full"
      style={{
        backgroundImage: "url('crowd.png')",
      }}
    >
      <div className="text-center text-white px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
          Lorem Ipsum is simply dummy
        </h1>
        <p className="text-sm sm:text-base mb-4 sm:mb-6">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <div className="flex items-center justify-center w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-1 bg-white rounded-lg h-[45px] sm:h-[50px] md:h-[60px] pl-4">
          <Search size={16} color="#7E7E7E" className="flex-shrink-0" />
          <input
            type="text"
            placeholder="Search here..."
            className="h-full w-full px-2 flex-1 text-gray-800 focus:outline-none"
          />
          <button className="bg-[#FF3B30] text-white h-full px-3 sm:px-4 md:px-6 rounded-md whitespace-nowrap text-sm sm:text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
