import React from 'react';

const ProductCardSkeleton = () => {
  return (
    
        <div className="border rounded-xl overflow-hidden shadow-md bg-white animate-pulse">

      {/* Image Skeleton */}
      <div className="w-full h-52 bg-gray-200"></div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Title */}
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Rating */}
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>

        {/* Price */}
        <div className="flex gap-2">
          <div className="h-5 bg-gray-200 rounded w-16"></div>
          <div className="h-5 bg-gray-200 rounded w-12"></div>
        </div>

        {/* Button */}
        <div className="h-10 bg-gray-200 rounded"></div>

      </div>
    </div>
  );
};

export default ProductCardSkeleton;