import React from 'react';
import { HiSpeakerphone } from 'react-icons/hi';
import { PiMoneyBold } from 'react-icons/pi';

const ExclusiveSupplier = () => {
    return (
      <section className="flex items-center bg-blue-50 py-8 px-2 md:px-4 lg:px-8 gap-8 flex-col lg:flex-row my-10">
        <h1 className="text-4xl text-primary font-bold  md:w-1/2">
          Exclusive Supplier+ Rewards for the first 30 days
        </h1>
        <div className="flex lg:flex-row flex-col gap-4 md:w-1/2">
          <div className="bg-white p-3 rounded-lg transform lg:-translate-y-12 shadow-lg ">
            <HiSpeakerphone className="text-3xl text-primary" />
            <h2 className="font-bold text-lg">
              Free catalog visibility of ₹600
            </h2>
            <p className="text-gray-500 text-sm">
              Run advertisements for your catalogs to increase the visibility of
              your products and get more orders. Currently, not available for
              sellers who don't have a Regular GSTIN.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg transform lg:translate-y-12 shadow-lg">
            <PiMoneyBold className="text-3xl text-primary" />
            <h2 className="font-bold text-lg">
              Free catalog visibility of ₹600
            </h2>
            <p className="text-gray-500 text-sm">
              Run advertisements for your catalogs to increase the visibility of
              your products and get more orders. Currently, not available for
              sellers who don't have a Regular GSTIN.
            </p>
          </div>
        </div>
      </section>
    );
};

export default ExclusiveSupplier;