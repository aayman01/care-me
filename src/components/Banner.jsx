import React from "react";
import banner from "../assets/banner.avif"

const Banner = () => {
  return (
    <div className="w-full relative bg-gradient-to-r from-[#F5E6E6] to-[#750028]/10 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between sm:mt-10 px-8 relative z-10">
        {/* Left content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sell online to <span className="text-black">14 Cr+ customers</span>{" "}
            at
            <span className="text-[#750028]"> 0% Commission</span>
          </h1>
          <p className="text-gray-800">
            Become a Care Me seller and grow your business across Bangladesh
          </p>
          <div className="flex items-center space-x-2">
            <span className="bg-[#750028] text-white text-sm font-bold px-2 py-1 rounded">
              New!
            </span>
            <p className="text-gray-700">
              Don’t have a GSTIN? You can still sell on Meesho.{" "}
              <a href="#" className="text-[#750028] underline">
                Know more
              </a>
            </p>
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="max-w-lg p-2 border  bg-white border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#750028] text-white px-4 py-2 rounded-r-md font-bold">
              Start Selling
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          {/* Curved background */}
          <div 
            className="absolute right-0 top-0 w-[800px] h-full bg-[#750028] rounded-tl-full"
            style={{
              transform: 'translateX(30%)',
              opacity: '0.9'
            }}
          />
          
          {/* Image */}
          <img
            src={banner}
            alt="Man holding boxes"
            className="relative z-10 w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
