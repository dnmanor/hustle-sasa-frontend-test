import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center data-twe-lazy-load-init data-twe-lazy-sr h-[20vh]"
      style={{
        backgroundImage: "url('crowd.png')",
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Lorem Ipsum is simply dummy</h1>
        <p className="mb-6">Lorem Ipsum is simply dummy text of the printing</p>
        <div>
          <input
            type="text"
            placeholder="Search here..."
            className="px-4 py-2 w-64 rounded-md outline-none text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
