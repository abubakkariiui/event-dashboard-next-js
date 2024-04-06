import React from "react";

const StatCard = ({ number, label }) => {
  return (
    <div className="flex flex-col border p-4 bg-white rounded-lg shadow-xs">
      <p className="text-lg mb-2 text-gray-500">{label}</p>
      <p className="text-3xl font-semibold text-gray-800">{number}</p>
    </div>
  );
};

export default StatCard;
