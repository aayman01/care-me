import React from "react";

const categories = [
  {
    id: 1,
    name: "Sell Sarees Online",
  },
  {
    id: 2,
    name: "Sell Tshirts Online",
  },
  {
    id: 3,
    name: "Sell Watches Online",
  },
  {
    id: 4,
    name: "Sell Clothes Online",
  },
  {
    id: 5,
    name: "Sell Electronics Online",
  },
  { 
    id: 6, 
    name: "Sell Jewellery Online" 
  },
  { 
    id: 7,
    name: "Sell Socks Online"
  },
  { 
    id: 8, 
    name: "Sell Shirts Online"
  },
];
const PopularCategories = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-primary py-8 text-left">
        Popular Categories to Sell Online
      </h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 pr-8">
        {categories.map((category) => (
          <div key={category.id} className="">
            <h3 className="text-gray-500">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
