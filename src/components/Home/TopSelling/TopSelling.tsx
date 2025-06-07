import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/components/products/product-card";
import React from "react";

const TopSelling = () => {
  return (
    <div className="flex flex-col items-center space-y-8 mt-16">
      <h2 className="text-5xl font-extrabold">TOP SELLING</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <ProductCard key={i} title={`Product ` + i} price={120} stars={4.5} />
        ))}
      </div>
      <Button
        variant={"outline"}
        className="px-12 py-5 cursor-pointer rounded-full"
      >
        View All
      </Button>
      <div className="border w-2/3 h-1 bg-gray-200" />
    </div>
  );
};

export default TopSelling;
