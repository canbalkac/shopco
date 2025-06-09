import type { Product } from "@/lib/data";
import ProductCard from "../ui/components/products/product-card";

export default function ShopProductGrid({ products }: { products: Product[] }) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Showing 1–{products.length} Products
        </h2>
        <select className="border px-2 py-1 rounded text-sm">
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

      <div className="flex justify-center mt-8">
        <button className="border px-4 py-2 rounded-full text-sm">
          Previous
        </button>
        <button className="border px-4 py-2 rounded-full text-sm mx-2 bg-black text-white">
          1
        </button>
        <button className="border px-4 py-2 rounded-full text-sm">Next</button>
      </div>
    </>
  );
}
