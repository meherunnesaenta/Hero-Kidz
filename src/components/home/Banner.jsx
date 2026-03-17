import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex-1 space-y-5'>
            <h2 className={`text-4xl font-bold ${fontBangla.className}`}>আপনার শিশুকে দিন একটি{" "}
          <span className="text-primary">সুন্দর ভবিষ্যত</span></h2>
          <p>Buy Every toy with up to 15% Discount</p>
          <button className='btn btn-primary btn-outline'>Explore Products </button>
        </div>
        <div className='flex-1'>
            <Image 
            alt='Buy Every toy with to 15% Discount'
            src={'/assets/hero.png'}
            width={500}
            height={400}></Image>
        </div>

    </div>
  );
};

export default Banner;