import ShopFilters from "@/components/Shop/ShopFilters";
import ShopProductGrid from "@/components/Shop/ShopProductGrid";
import { getAllProducts, getProductsByCategory } from "@/lib/data";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const category = searchParams.category?.toLowerCase();
  const products = category
    ? await getProductsByCategory(category)
    : await getAllProducts();
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <ShopFilters />
      </div>
      <div className="lg:col-span-3">
        <ShopProductGrid products={products} />
      </div>
    </div>
  );
}
