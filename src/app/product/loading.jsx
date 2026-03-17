import React from 'react';

import product from '../../data/toys.json'
import ProductCardSkeleton from '@/components/Skeleton/ProductCardSkeleton';

const loading = () => {
    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10'>
            {
                product.map(p => <ProductCardSkeleton key={p.title} product={p}></ProductCardSkeleton>)
            }
        </div>

    );
};

export default loading;