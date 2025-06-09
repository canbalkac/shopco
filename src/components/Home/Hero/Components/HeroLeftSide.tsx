import React from "react";
import { Button } from "../../../ui/button";
import CountUp from "react-countup";
import { Separator } from "../../../ui/separator";
import Link from "next/link";

const counts: { duration: number; end: number; text: string }[] = [
  {
    duration: 5,
    end: 200,
    text: "International Brands",
  },
  {
    duration: 5,
    end: 2000,
    text: "High-Quality Products",
  },
  {
    duration: 5,
    end: 30000,
    text: "Happy Customers",
  },
];

const HeroLeftSide = () => {
  return (
    <div className="flex flex-col lg:max-w-1/3 gap-5 px-5">
      <p className="text-3xl sm:text-7xl font-extrabold text-black">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </p>
      <p className="text-gray-500">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Link href={"/shop"}>
        <Button className="rounded-full w-42 p-4 cursor-pointer">
          Shop Now
        </Button>
      </Link>
      <div className="flex items-center gap-3 h-16">
        {counts.map((count, index) => (
          <div key={index} className="flex h-16 space-x-4">
            <div className="flex flex-col">
              <p className="font-bold texl-xl sm:text-2xl md:text-3xl">
                <CountUp end={count.end} duration={count.duration} />
                {"+"}
              </p>
              <p className="text-gray-500 text-xs">{count.text}</p>
            </div>
            <Separator className="bg-gray-400" orientation="vertical" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroLeftSide;
