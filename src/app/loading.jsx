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

      </div>
    </div>
  );
};

export default loading;