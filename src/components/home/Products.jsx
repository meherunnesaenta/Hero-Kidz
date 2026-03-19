import React from 'react';

import ProductCard from '../card/ProductCard';
import { getProducts } from '@/actions/server/product';

const Products =async () => {
    const product= await getProducts();
  return (
    <div>
        <h2 className='text-center text-4xl font-bold'>Our <span className='text-primary'>Products</span></h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10'>
            {
                product.map((p)=><ProductCard key={p._id.toString()} product={p}></ProductCard>)
            }
        </div>
    </div>
  );
};

export default Products;