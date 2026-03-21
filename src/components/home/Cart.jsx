import React from 'react';
import CartItem from '../card/CartItem';

const Cart = ({ cart }) => {
    return (
        <div>
            {
                cart.map(cart => <CartItem carts={cart} key={cart._id}></CartItem>)
            }
        </div>
    );
};

export default Cart;