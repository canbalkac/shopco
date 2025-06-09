import CustomBreadcrumb from "@/components/Products/BreadCrumb";
import ShopFilters from "@/components/Shop/ShopFilters";
import ShopProductGrid from "@/components/Shop/ShopProductGrid";
import { getAllProducts } from "@/lib/data";
import { capitalize } from "@/lib/utils";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = await searchParams;

  const category = params.category?.toLowerCase();
  const style = params.style?.toLowerCase();
  const size = params.size?.toLowerCase();
  const color = params.color?.toLowerCase();
  const rawMin = Number(params.priceMin);
  const rawMax = Number(params.priceMax);

  const priceMin = isNaN(rawMin) ? 0 : rawMin;
  const priceMax = isNaN(rawMax) ? Infinity : rawMax;

  const crumbs = [{ label: "Home", href: "/" }, { label: "Shop" }];

  let products = await getAllProducts();

  const sort = params.sort || "popular";

  if (sort === "price-low") {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    products.sort((a, b) => b.price - a.price);
  } else if (sort === "new") {
    products.sort((a, b) => b.rating - a.rating);
  } else {
    products.sort((a, b) => b.rating - a.rating);
  }

  if (params.gender) {
    crumbs.push({ label: capitalize(params.gender) });
  }

  if (style) {
    products = products.filter((p) => p.dressStyle.toLowerCase() === style);
    crumbs.push({ label: capitalize(params.style) });
  }

  if (category) {
    products = products.filter((p) => p.category.toLowerCase() === category);
    crumbs.push({ label: capitalize(params.category) });
  }

  if (size) {
    products = products.filter((p) =>
      p.sizes.map((s) => s.toLowerCase()).includes(size)
    );
  }

  if (color) {
    products = products.filter((p) =>
      p.colors.map((c) => c.toLowerCase()).includes(color)
    );
  }

  products = products.filter((p) => p.price >= priceMin && p.price <= priceMax);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <CustomBreadcrumb crumbs={crumbs} />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <ShopFilters />
        </div>
        <div className="lg:col-span-3">
          <ShopProductGrid products={products} />
        </div>
      </div>
    </>
  );
}
