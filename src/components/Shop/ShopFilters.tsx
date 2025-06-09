"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function ShopFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceMin, setPriceMin] = useState(searchParams.get("priceMin") || "0");
  const [priceMax, setPriceMax] = useState(
    searchParams.get("priceMax") || "1000"
  );

  const handleCategoryClick = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === searchParams.get("category")?.toLowerCase()) {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`/shop?${params.toString()}`);
  };

  const handleStyleClick = (style: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (style === searchParams.get("style")) {
      params.delete("style");
    } else {
      params.set("style", style);
    }
    router.push(`/shop?${params.toString()}`);
  };

  const handleSizeClick = (size: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchParams.get("size")?.toLowerCase() === size.toLowerCase()) {
      params.delete("size");
    } else {
      params.set("size", size);
    }
    router.push(`/shop?${params.toString()}`);
  };

  const handleColorClick = (color: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchParams.get("color") === color) {
      params.delete("color");
    } else {
      params.set("color", color);
    }
    router.push(`/shop?${params.toString()}`);
  };

  const applyPriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Fiyat değerlerini temizle
    if (priceMin) {
      params.set("priceMin", priceMin);
    } else {
      params.delete("priceMin");
    }

    if (priceMax) {
      params.set("priceMax", priceMax);
    } else {
      params.delete("priceMax");
    }

    router.push(`/shop?${params.toString()}`);
  };

  return (
    <>
      <div className="max-w-7xl space-y-6 text-sm">
        <h2 className="text-lg font-semibold">Filters</h2>

        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <ul className="space-y-1">
            {["t-shirts", "shirts", "jeans", "shorts", "hoodie"].map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex items-center justify-between text-left w-full py-1 px-2 rounded ${
                    searchParams.get("category")?.toLowerCase() ===
                    cat.toLowerCase()
                      ? "bg-black text-white hover:bg-gray-100 hover:text-black"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                  {searchParams.get("category")?.toLowerCase() ===
                    cat.toLowerCase() && (
                    <span className="ml-2 p-0.5 text-sm font-semibold cursor-pointer">
                      X
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price</h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="border rounded w-20 px-2 py-1 text-sm"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
            <span>—</span>
            <input
              type="number"
              className="border rounded w-20 px-2 py-1 text-sm"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </div>
          <button
            onClick={applyPriceFilter}
            className="mt-2 text-sm underline cursor-pointer hover:text-white hover:bg-black p-2 rounded-md"
          >
            Apply
          </button>
        </div>

        <div>
          <h3 className="font-medium mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {["black", "red", "green", "blue", "white", "orange", "purple"].map(
              (color) => (
                <div
                  key={color}
                  onClick={() => handleColorClick(color)}
                  className={`w-6 h-6 rounded-full cursor-pointer border ${
                    searchParams.get("color") === color
                      ? "ring-2 ring-black"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Size</h3>
          <div className="flex flex-wrap gap-2">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                onClick={() => handleSizeClick(s)}
                className={`border rounded-full px-3 py-1 text-sm ${
                  searchParams.get("size") === s ? "bg-black text-white" : ""
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Dress Style</h3>
          <ul className="space-y-1">
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
              <li key={style}>
                <button
                  onClick={() => handleStyleClick(style)}
                  className={`text-left w-full py-1 px-2 rounded hover:bg-gray-100 ${
                    searchParams.get("style")?.toLowerCase() ===
                    style.toLowerCase()
                      ? "bg-black text-white"
                      : ""
                  }`}
                >
                  {style}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-full text-sm cursor-pointer">
          Apply Filter
        </button>
        <button
          onClick={() => router.push("/shop")}
          className="w-full bg-white border border-gray-300 text-sm py-2 rounded-full hover:bg-gray-100"
        >
          Reset Filters
        </button>
      </div>
    </>
  );
}
