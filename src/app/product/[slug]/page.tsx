import ProductDetails from "@/components/Products/ProductDetails";
import ProductReviews from "@/components/Products/ProductReviews";
import SuggestedProducts from "@/components/Products/SuggestedProducts";
import { getProductBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <section id="product-details">
      <ProductDetails product={product} />
      <ProductReviews />
      <SuggestedProducts currentSlug={product.slug} />
    </section>
  );
}
