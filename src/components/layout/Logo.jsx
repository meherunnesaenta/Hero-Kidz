import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'} className='flex gap-1 justify-center items-center'>
                <Image
        src="/assets/logo.png"
        alt="hero kidz Logo"
        width={50}
        height={40}
        />

        <div className='font-bold'> Hero <span className='text-primary'>Kidz</span></div>
    </Link>
  );
};

export default Logo;