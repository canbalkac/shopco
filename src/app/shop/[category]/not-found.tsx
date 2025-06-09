// app/shop/[category]/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
      <p className="text-gray-600 mb-6">
        The category you are looking for doesn't exist or has no products.
      </p>
      <a
        href="/shop"
        className="bg-black text-white px-6 py-2 rounded-full text-sm hover:opacity-90"
      >
        Back to Shop
      </a>
    </div>
  );
}
