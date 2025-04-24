import React from "react";
import p1Image from "../assets/p1.png";
const stories = [
  {
    name: "Amit and Rajat Jain",
    company: "Smartees, Tiruppur",
    description:
      "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
    image: p1Image, // Replace with actual image paths
  },
  {
    name: "Suman",
    company: "Keshav Fashion, Hisar",
    description:
      "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
    image: p1Image,
  },
  {
    name: "Mohit Rathi",
    company: "Meira Jewellery, Ahmedabad",
    description:
      "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
    image: p1Image,
  },
];

const SupplierStories = () => {
  return (
    <div className="px-2 py-8">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Experiences suppliers love to talk about
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-md shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-60 object-cover p-3 rounded-lg"
              />
              <button className="absolute bottom-[-8px] left-8 bg-primary rounded-full p-1 border-4 border-amber-400">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl text-primary font-bold">
                {story.name}
              </h3>
              <p className="text-lg text-gray-800 mb-2">{story.company}</p>
              <p className="text-md text-gray-600">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierStories;
