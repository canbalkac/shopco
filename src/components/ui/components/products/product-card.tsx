import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import React from "react";

type productCardProps = {
  title: string;
  price: number;
  stars: number;
};

const ProductCard = ({ title, price, stars, ...props }: productCardProps) => {
  return (
    <div {...props} className="flex flex-col itesm-center max-w-[295px]">
      <Image
        src="/images/herobg.png"
        alt="new-arrivals"
        width={295}
        height={298}
        className="rounded-sm w-[295px] h-[298px]"
      />
      <p className="ml-1 mt-1 font-bold">{title}</p>
      <p className="ml-0.5 flex gap-0.5">
        <Star color="orange" fill="orange" />
        <Star color="orange" fill="orange" />
        <Star color="orange" fill="orange" />
        <Star color="orange" fill="orange" />
        <StarHalf color="orange" fill="orange" />
        {stars}/5.0
      </p>
      <p className="text-xl font-semibold">${price}</p>
    </div>
  );
};

export default ProductCard;
