import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/components/products/product-card";
import { getTopSellingProducts } from "@/lib/data";
import React from "react";

const TopSelling = async () => {
  const products = await getTopSellingProducts();
  return (
    <section className="flex flex-col items-center space-y-8 mt-16">
      <h2 className="text-5xl font-extrabold">TOP SELLING</h2>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <Button
        variant={"outline"}
        className="px-12 py-5 cursor-pointer rounded-full"
      >
        View All
      </Button>
      <div className="border w-2/3 h-1 bg-gray-200" />
    </section>
  );
};

export default TopSelling;
