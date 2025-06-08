import { getSuggestedProducts } from "@/lib/data";
import ProductCard from "../ui/components/products/product-card";

type Props = {
  currentSlug: string;
};

export default async function SuggestedProducts({ currentSlug }: Props) {
  const suggestions = await getSuggestedProducts(currentSlug);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {suggestions.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
