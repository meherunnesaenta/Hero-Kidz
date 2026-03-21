import { getCart } from '@/actions/server/cart';

import Cart from '@/components/home/Cart';
import React from 'react';

const page = async () => {
    const carts = await getCart();
  return (
    <div >
        <Cart cart={carts}></Cart>
    </div>
  );
};

export default page;