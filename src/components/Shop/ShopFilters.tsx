"use client";
import { useRouter, useSearchParams } from "next/navigation";
export default function ShopFilters({
  currentCategory,
}: {
  currentCategory?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === currentCategory) {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`/shop?${params.toString()}`);
  };
  return (
    <div className="space-y-6 text-sm">
      <h2 className="text-lg font-semibold">Filters</h2>

      <div>
        <h3 className="font-medium mb-2">Category</h3>
        <ul className="space-y-1">
          {["t-shirts", "shirts", "jeans", "shorts", "hoodie"].map((cat) => (
            <li key={cat}>
              <button
                onClick={() => handleCategoryClick(cat)}
                className={`text-left w-full py-1 px-2 rounded hover:bg-gray-100 ${
                  currentCategory === cat ? "bg-black text-white" : ""
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-medium mb-2">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {["#000", "#f00", "#0f0", "#00f", "#ff0", "#0ff", "#fff"].map((c) => (
            <div
              key={c}
              className="w-6 h-6 rounded-full border cursor-pointer"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="border rounded-full px-3 py-1 text-sm hover:bg-black hover:text-white"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Dress Style</h3>
        <ul className="space-y-1">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <li key={style}>
              <label className="cursor-pointer flex items-center gap-2">
                <input type="checkbox" className="accent-black" />
                {style}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-full text-sm">
        Apply Filter
      </button>
    </div>
  );
}
