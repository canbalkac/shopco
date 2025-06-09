import CustomBreadcrumb from "@/components/Products/BreadCrumb";
import ProductCard from "@/components/ui/components/products/product-card";
import { getProductsByCategory } from "@/lib/data";
import { capitalize } from "@/lib/utils";
import { notFound } from "next/navigation";

type Props = {
  params: { category: string };
};

export default async function CategoryPage({ params }: Props) {
  const category = params.category.toLowerCase();
  const products = await getProductsByCategory(category);

  if (!products || products.length === 0) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CustomBreadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: capitalize(category) },
        ]}
      />
      <h1 className="text-2xl font-bold mb-6">{capitalize(category)}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
