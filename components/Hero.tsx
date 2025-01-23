import React from "react";
import {Search} from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center data-twe-lazy-load-init data-twe-lazy-sr h-[390px]"
      style={{
        backgroundImage: "url('crowd.png')",
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Lorem Ipsum is simply dummy</h1>
        <p className="mb-6">Lorem Ipsum is simply dummy text of the printing</p>
        <div className="flex items-center justify-center w-[2/4] p-1 bg-white rounded-md h-[60px] pl-4">
          <Search size={16} color="#7E7E7E" />
          <input type="text" placeholder="Search here..." className="h-full px-2 flex-1" />
          <button className="bg-[#FF3B30] text-white h-full px-6 rounded-md">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
