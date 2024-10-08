import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="bg-[#202221] w-full h-full flex flex-col justify-between rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="aspect-[4/3] md:aspect-[1036/350] w-full h-[335px] md:h-56 bg-[#202221] rounded-t-lg "></div>
      <div className="flex-grow p-4">
        <div className="h-6 bg-[#202221] rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-[#202221] rounded w-full mb-2"></div>
        <div className="h-4 bg-[#202221] rounded w-5/6 mb-4"></div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#202221] rounded-full mr-2"></div>
            <div className="h-4 bg-[#202221] rounded w-24"></div>
          </div>
          <div className="w-3 h-4 bg-[#202221] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
