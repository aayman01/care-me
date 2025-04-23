import React from 'react';


const scores = [
  {
    id: 1,
    text: "Trust Care Me to sell online",
    score: "11 Lakh+",
  },
  {
    id: 2,
    text: "Customers buying across Bangladesh",
    score: "14 Crore+",
  },
  {
    id: 3,
    text: "Pincode Supported for delivery",
    score: "19000+",
  },
  {
    id: 4,
    text: "Categories to sell online",
    score: "700+",
  },
];

const Scores = () => {
    return (
      <div className="lg:flex items-center justify-between gap-4 ">
        {scores.map((score) => (
          <div
            key={score.id}
            className="flex flex-col items-left justify-center p-4 bg-[#F3F3F3] shadow-md rounded-lg m-4"
          >
            <h2 className="text-4xl font-bold text-primary pb-3">{score.score}</h2>
            <p className="text-lg text-gray-500 font-bold">{score.text}</p>
          </div>
        ))}
      </div>
    );
};

export default Scores;