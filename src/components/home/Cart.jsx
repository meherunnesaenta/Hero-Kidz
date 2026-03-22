'use client'
import React, { useMemo, useState } from 'react';
import CartItem from '../card/CartItem';

const Cart = ({ cart = [] }) => {
    const [item, setItem] = useState(cart);

    const totalItems = useMemo(() => item.reduce((acm, item) => acm + item.quantity, 0), [item]);

    
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