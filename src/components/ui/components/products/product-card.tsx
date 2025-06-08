"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import type { Product } from "@/lib/data";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.slug}`} className="block space-y-2">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={300}
        className="rounded-lg object-cover w-full"
      />
      <h3 className="font-semibold text-sm">{product.title}</h3>
      <div className="flex items-center text-yellow-400 text-sm">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        <span className="text-gray-500 ml-2">{product.rating}/5.0</span>
      </div>
      <p className="font-bold text-black">${product.price}</p>
      {product.originalPrice > product.price && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="line-through">${product.originalPrice}</span>
          <span className="bg-red-100 text-red-500 px-2 py-0.5 rounded-full text-xs">
            -
            {Math.round(
              ((product.originalPrice - product.price) /
                product.originalPrice) *
                100
            )}
            %
          </span>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
