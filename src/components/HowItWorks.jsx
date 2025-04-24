import React from 'react';

const steps = [
  {
    title: "Create Account",
    description: (
      <>
        All you need is:
        <ul className="list-disc ml-5 mt-1">
          <li>
            GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)
          </li>
          <li>Bank Account</li>
        </ul>
      </>
    ),
  },
  {
    title: "List Products",
    description: "List the products you want to sell in your supplier panel",
  },
  {
    title: "Get Orders",
    description:
      "Start getting orders from crores of Indians actively shopping on our platform.",
  },
  {
    title: "Lowest Cost Shipping",
    description: "Products are shipped to customers at lowest costs",
  },
  {
    title: "Receive Payments",
    description:
      "Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.",
  },
];

const HowItWorks = () => {
    return (
      <div className="bg-blue-50 p-4 md:p-8 mb-20 mt-15 rounded-md">
        {/* Steps with numbers - Hidden on mobile, visible on md and up */}
        <div className="hidden md:flex items-center justify-center flex-wrap gap-8 mb-8">
          {[1, 2, 3, 4, 5].map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full font-bold text-3xl">
                {step}
              </div>
              {index < 4 && (
                <div className="w-28 h-0.5 bg-primary"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Steps description */}
        <div className="bg-[#f0f3fe] rounded-md px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile step number */}
                <div className="md:hidden absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                {/* Content */}
                <div className="text-center pt-6 md:pt-0 md:text-left">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <div className="text-sm text-gray-800 mx-auto md:mx-0">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default HowItWorks;