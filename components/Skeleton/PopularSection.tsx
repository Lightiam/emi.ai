import React from "react";

const PopularSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm animate-pulse"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
          <div className="h-24 bg-gray-200 rounded mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded-full w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularSection;
