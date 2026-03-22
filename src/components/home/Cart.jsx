'use client'
import React, { useMemo, useState } from 'react';
import CartItem from '../card/CartItem';
import { usePathname, useRouter } from 'next/navigation';
import { getServerSession } from 'next-auth';

const Cart = ({ cart = [] }) => {
    const router =useRouter();
    const path =usePathname();
    const sesssion= getServerSession();
    const [item, setItem] = useState(cart);

    const totalItems = useMemo(() => item.reduce((acm, item) => acm + item.quantity, 0), [item]);

    if(!sesssion){
        router.push(`/login?callbackUrl=${path}`);
    }
    return (
        <div>
            <h2> total items : {totalItems}</h2>
            <div>
                {
                    item.map(cart => <CartItem carts={cart} key={cart._id}></CartItem>)
                }
            </div>
        </div>
    );
};

export default Cart;