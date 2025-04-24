import React from 'react';
import { FaHandHolding } from 'react-icons/fa';
import { MdOutlineAirlineStops } from 'react-icons/md';
import { RiFileList3Fill } from 'react-icons/ri';

const WhySupplier = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-2 md:px-8 py-12">
        <div className="lg:w-1/2">
          <h1 className="text-primary text-4xl mb-2 font-bold">
            Why Suppliers Love Care Me
          </h1>
          <p className="text-gray-600 text-sm font-medium">
            All the benefits that come with selling on Care Me are designed to
            help you sell more, and make it easier to grow your business.
          </p>
        </div>
        <div className="border-2 border-gray-200 rounded-lg p-4 mt-4 space-y-5 lg:w-1/2 py-8">
          <div className="flex items-center gap-4">
            <FaHandHolding className="text-3xl text-primary" />
            <div>
              <h1 className=" text-2xl font-bold">0% Commission Fee</h1>
              <p className="text-gray-600 text-sm font-medium">
                Suppliers selling on Meesho keep 100% of their profit by not
                paying any commission
              </p>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="flex items-center gap-4">
            <RiFileList3Fill className="text-3xl text-primary" />
            <div>
              <h1 className="text-2xl font-bold">0 Penalty Charges</h1>
              <p className="text-gray-600 text-sm font-medium">
                Suppliers selling on Meesho keep 100% of their profit by not
                paying any commission
              </p>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="flex items-center gap-2">
            <MdOutlineAirlineStops className="text-7xl text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Growth for Every Supplier</h1>
              <p className="text-gray-600 text-sm font-medium">
                From small to large and unbranded to branded, and now open for
                Sellers who don't have a Regular GSTIN too, Meesho fuels growth
                for all suppliers.
              </p>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="flex items-center gap-4">
            <FaHandHolding className="text-3xl text-primary" />
            <div>
              <h1 className=" text-2xl font-bold">Ease of Doing Business</h1>
              <p className="text-gray-600 text-sm font-medium">
                Suppliers selling on Meesho keep 100% of their profit by not
                paying any commission
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhySupplier;