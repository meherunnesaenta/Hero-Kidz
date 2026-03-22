import { getCart } from '@/actions/server/cart';

import Cart from '@/components/home/Cart';
import { useSession } from 'next-auth/react';
import React from 'react';

const page = async () => {
    const session = useSession();
    const carts = await getCart();
    console.log(carts)
  return (
    <div >
        <Cart cart={carts}></Cart>
    </div>
  );
};

export default page;