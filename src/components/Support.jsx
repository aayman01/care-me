import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Support = () => {
    return (
      <section className="bg-blue-50 py-20 px-6 md:px-20 my-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Care Me Supplier Support <br /> Available 24/7
            </h2>
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600">
              Meesho supplier support is available to solve all your doubts and
              issues before and after you start your online selling business.
            </p>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary text-white rounded-full">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-primary font-semibold">
                  You can reach out to
                </p>
                <p className="text-gray-600">support@caremebd.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Support;