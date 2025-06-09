export type Product = {
  slug: string;
  title: string;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  price: number;
  originalPrice: number;
  rating: number;
  category: "t-shirt" | "hoodie" | "jeans" | "shorts" | "shirts";
  dressStyle: "Casual" | "Formal" | "Party" | "Gym";
};

const products: Product[] = [
  {
    slug: "one-life-tshirt",
    title: "One Life Graphic T-Shirt",
    description: "A soft cotton tee with bold graphics for a streetwear vibe.",
    images: [
      "/products/one-1.png",
      "/products/one-2.png",
      "/products/one-3.png",
    ],
    colors: ["#1F1F1F", "#555555", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    price: 260,
    originalPrice: 300,
    rating: 4.5,
    category: "t-shirt",
    dressStyle: "Casual",
  },
  {
    slug: "urban-hoodie",
    title: "Urban Oversized Hoodie",
    description: "Oversized premium hoodie made with recycled fabrics.",
    images: [
      "/products/two-1.png",
      "/products/two-2.png",
      "/products/two-3.png",
    ],
    colors: ["#2E2E2E", "#8B8B8B"],
    sizes: ["M", "L"],
    price: 180,
    originalPrice: 220,
    rating: 4.8,
    category: "hoodie",
    dressStyle: "Gym",
  },
  {
    slug: "midnight-jeans",
    title: "Midnight Slim-Fit Jeans",
    description: "Tapered denim with deep indigo wash. Flexible, stylish.",
    images: [
      "/products/jeans-1.png",
      "/products/jeans-2.png",
      "/products/jeans-3.png",
    ],
    colors: ["#1C1C1C", "#2A2A2A"],
    sizes: ["28", "30", "32", "34", "36"],
    price: 310,
    originalPrice: 360,
    rating: 4.3,
    category: "jeans",
    dressStyle: "Formal",
  },
  {
    slug: "vintage-party-shirt",
    title: "Vintage Floral Party Shirt",
    description: "Vibrant floral print, short sleeve, breathable material.",
    images: [
      "/products/shirt-1.png",
      "/products/shirt-2.png",
      "/products/shirt-3.png",
    ],
    colors: ["#FF6B6B", "#FFD93D", "#6BCB77"],
    sizes: ["S", "M", "L"],
    price: 150,
    originalPrice: 190,
    rating: 4.6,
    category: "shirts",
    dressStyle: "Party",
  },
  {
    slug: "breeze-shorts",
    title: "Breeze Flex Shorts",
    description: "Lightweight and moisture-wicking shorts for active days.",
    images: [
      "/products/shorts-1.png",
      "/products/shorts-2.png",
      "/products/shorts-3.png",
      "/products/shorts-4.png",
    ],
    colors: ["#000000", "#4F4F4F", "#C0C0C0"],
    sizes: ["S", "M", "L", "XL"],
    price: 90,
    originalPrice: 120,
    rating: 4.2,
    category: "shorts",
    dressStyle: "Gym",
  },
];

export async function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug) ?? null;
}
export async function getNewArrivalProducts(): Promise<Product[]> {
  return products.slice(0, 4);
}

export async function getTopSellingProducts(): Promise<Product[]> {
  return products.slice(1, 5);
}

export async function getSuggestedProducts(
  currentSlug: string
): Promise<Product[]> {
  return products.filter((p) => p.slug !== currentSlug).slice(0, 4);
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getAllProducts(): Promise<Product[]> {
  return products;
}
