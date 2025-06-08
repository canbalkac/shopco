import ProductDetails from "@/components/Products/ProductDetails";
import ProductReviews from "@/components/Products/ProductReviews";
import SkeletonProduct from "@/components/Products/SkeletonProduct";
import SuggestedProducts from "@/components/Products/SuggestedProducts";
import { getProductBySlug } from "@/lib/data";

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  if (!product) return <SkeletonProduct />;
  return (
    <section id="product-details">
      <ProductDetails product={product} />
      <ProductReviews />
      <SuggestedProducts currentSlug={product.slug} />
    </section>
  );
}
