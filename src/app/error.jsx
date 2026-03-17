// app/error.tsx   (Next.js App Router-এর জন্য)

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        {/* Large Error Indicator */}
        <h1 
          className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[oklch(65%_0.23_35)] via-[oklch(58%_0.18_30)] to-[oklch(72%_0.20_55)]"
        >
          Error
        </h1>

        {/* Main Message */}
        <div className="mt-8 space-y-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral">
            Something Went Wrong
          </h2>
          
          <p className="text-lg sm:text-xl text-neutral/80 max-w-2xl mx-auto leading-relaxed">
            An unexpected error occurred. Please try again later or return to the homepage.
          </p>
        </div>


        {/* Action Buttons - Simple & Clear */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white bg-[oklch(65%_0.23_35)] rounded-lg shadow-md hover:bg-[oklch(58%_0.18_30)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[oklch(65%_0.23_35)]/30"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Homepage
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold text-[oklch(65%_0.23_35)] border-2 border-[oklch(65%_0.23_35)] rounded-lg hover:bg-[oklch(65%_0.23_35)] hover:text-white transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* Small Note */}
        <div className="mt-12 text-sm text-neutral/60">
          <p>
            If this issue continues, feel free to{' '}
            <Link href="/contact" className="text-[oklch(65%_0.23_35)] hover:underline font-medium">
              reach out to us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;