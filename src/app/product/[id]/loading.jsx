import React from "react";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 animate-pulse">
      {/* Image + Info Skeleton */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="bg-gray-200 rounded-xl h-[500px] w-full"></div>

        {/* Info Skeleton */}
        <div className="space-y-5">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>

          <div className="flex items-center gap-4">
            <div className="h-6 w-20 bg-gray-200 rounded"></div>
            <div className="h-6 w-16 bg-gray-200 rounded"></div>
          </div>

          <div className="flex gap-4 pt-2">
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
          </div>

          <div className="pt-4 space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="mt-12 space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
        ))}
      </div>

      {/* FAQ Skeleton */}
      <div className="mt-12 space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-200 rounded-lg w-full"></div>
        ))}
      </div>
    </div>
  );
};

export default loading;