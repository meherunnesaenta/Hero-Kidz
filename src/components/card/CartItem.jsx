'use client'

import { deleteItems } from '@/actions/server/cart';
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartItem = ({ carts }) => {
  const [quantity, setQuantity] = useState(carts.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemove = async() => {
    const result = await deleteItems(carts._id);
     return result;
  };


  return (
    <div className="flex items-center justify-between bg-base-100 p-4 rounded-lg shadow-md mb-4">

      {/* Image */}
      <img
        src={carts.image}
        alt={carts.title}
        className="w-20 h-20 object-cover rounded-lg border"
      />

      {/* Info */}
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-bold text-primary">
          {carts.title}
        </h2>
        <p className="text-secondary text-sm">
          {carts.username}
        </p>
        <p className="mt-1 font-semibold">
          Price: ৳{carts.price}
        </p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrement}
          className="btn btn-sm btn-outline btn-secondary"
        >
          <FaMinus />
        </button>

        <span className="px-3 font-semibold">{quantity}</span>

        <button
          onClick={handleIncrement}
          className="btn btn-sm btn-outline btn-secondary"
        >
          <FaPlus />
        </button>
      </div>

      {/* Total */}
      <div className="ml-4 font-bold text-accent">
        ৳{carts.price * quantity}
      </div>

      {/* Delete Button */}
      <button
        onClick={handleRemove}
        className="btn btn-sm btn-error ml-4"
        title="Remove item"
      >
        <FaTrash />
      </button>

    </div>
  );
};

export default CartItem;