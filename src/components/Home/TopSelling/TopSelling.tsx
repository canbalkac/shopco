"use client";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/components/products/product-card";
import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/lib/data";
import Link from "next/link";

const TopSelling = ({ products }: { products: Product[] }) => {
  return (
    <section className="flex flex-col items-center space-y-8 mt-16">
      <h2 className="text-5xl font-extrabold">TOP SELLING</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {products.map((product) => (
          <motion.div
            key={product.slug}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard key={product.slug} product={product} />
          </motion.div>
        ))}
      </motion.div>
      <Link href={"/shop"}>
        <Button
          variant={"outline"}
          className="px-12 py-5 cursor-pointer rounded-full"
        >
          View All
        </Button>
      </Link>
      <div className="border w-2/3 h-1 bg-gray-200" />
    </section>
  );
};

export default TopSelling;
