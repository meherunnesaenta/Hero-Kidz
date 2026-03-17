// app/loading.tsx

import React from 'react';
import Logo from '@/components/layout/Logo';

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-100">
      {/* Optional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-300 opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Logo - centered with gentle scale effect using built-in transition */}
        <div className="transform transition-all duration-1000 ease-out scale-110 opacity-100">
          <Logo />
        </div>

        {/* Professional spinner using your brand colors */}
        <div className="relative w-20 h-20">
          {/* Outer spinning ring - primary color */}
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />

          {/* Inner accent dot - pulsing with built-in animate-pulse */}
          <div className="absolute inset-[20%] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/40" />
          </div>
        </div>

        {/* Loading text - subtle and elegant */}
        <div className="mt-6 text-xl font-medium text-neutral tracking-wide">
          Loading<span className="animate-pulse">...</span>
        </div>

        {/* Optional small brand tagline or message */}
        <p className="mt-2 text-sm text-neutral/60 max-w-xs text-center">
          Preparing your experience with care
        </p>
      </div>

      {/* Very subtle bottom progress bar using built-in animation */}
      <div className="absolute bottom-10 w-64 h-1 bg-base-200 rounded-full overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-primary via-accent to-primary animate-[move_3s_linear_infinite]" />
      </div>
    </div>
  );
};

export default loading;