import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="flex flex-col items-center space-y-8 mt-16">
      <h2 className="text-5xl font-extrabold">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col itesm-center max-w-[295px] ">
            <Image
              src="/images/herobg.png"
              alt="new-arrivals"
              width={295}
              height={298}
              className="rounded-sm w-[295px] h-[298px]"
            />
            <p className="ml-1 mt-1 font-bold">ITEM Name</p>
            <p className="ml-0.5 flex gap-0.5">
              <Star color="orange" fill="orange" />
              <Star color="orange" fill="orange" />
              <Star color="orange" fill="orange" />
              <Star color="orange" fill="orange" />
              <StarHalf color="orange" fill="orange" />
              4.5/5
            </p>
            <p className="text-xl font-semibold">$120</p>
          </div>
        ))}
      </div>
      <Button
        variant={"outline"}
        className="px-12 py-5 cursor-pointer rounded-full"
      >
        View All
      </Button>
    </div>
  );
};

export default NewArrivals;
