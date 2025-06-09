"use client";
import ProductCard from "../ui/components/products/product-card";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/lib/data";

export default function ShopProductGrid({ products }: { products: Product[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "popular";

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Showing 1–{products.length} Products
        </h2>
        <select
          className="border px-2 py-1 rounded text-sm"
          value={currentSort}
          onChange={handleSortChange}
        >
          <option value="popular">Most Popular</option>
          <option value="new">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
