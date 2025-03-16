import React from "react";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className=" text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">
              <span className="text-red-600">Nepal's</span> <span>Best</span>
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Himalayan
            <span className="text-red-600"> Attire</span>
          </h1>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="font-semibold text-sm md:text-base mt-2">
              <span className="text-red-600"> Shop</span> Now
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-red-600 mt-2"></p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <img
        className="w-full sm:w-1/2"
        src="https://img.freepik.com/free-photo/beautiful-young-woman-wearing-professional-makeup_23-2150165279.jpg?t=st=1741705585~exp=1741709185~hmac=ae2f1b990b2616a2a46308b840b4f5fe881b099367450bb491bf3fac7bb7c9e6&w=1380"
        alt="banner"
      />
    </div>
  );
}

export default Hero;
