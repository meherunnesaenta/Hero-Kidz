import Products from '@/components/home/Products';
import React from 'react';
// app/products/page.tsx

export const metadata = {
  title: 'All Products | Hero Kidz',
  description: 'Browse our full collection of kids educational toys, costumes, learning boards, flash cards, logic games, and engineering tools.',
  openGraph: {
    title: 'Shop All Educational Toys & Costumes - Hero Kidz',
    description: 'Find the perfect toy for learning, play, and imagination.',
    images: [
      {
        url: 'https://i.ibb.co.com/8DbHt2vj/image.png', 
        width: 1200,
        height: 630,
        alt: 'Hero Kidz Product Collection',
      },
    ],
  },
  twitter: {
    images: ['https://i.ibb.co.com/8DbHt2vj/image.png'],
  },
};
const page = () => {
  return (
    <div>
        <Products></Products>
    </div>
  );
};

export default page;