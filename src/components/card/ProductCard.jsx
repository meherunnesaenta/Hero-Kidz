'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {

  const { title, image, price, discount, ratings, sold, _id } = product;

  const discountPrice = price - (price * discount) / 100;

  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white">

      {/* Image */}
      <div className="relative">
        <Image
         width={400}
         height={300}
          src={image}
          alt={title}
          className="w-full h-52 object-cover"
        />

        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Title */}
        <h2 className="text-sm font-semibold line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="text-sm text-yellow-500">
          ⭐ {ratings} ({sold} sold)
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">
            ৳{discountPrice}
          </span>

          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Button */}
          <Link href={`/product/${_id}`} className="w-full btn btn-primary">
          View Details
          </Link>

      </div>
    </div>
  );
};

export default ProductCard;