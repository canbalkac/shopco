import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
      <p className="text-gray-600 mb-6">
        The product you are looking for does not exist or has been removed.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-2 rounded-full text-sm hover:opacity-90"
      >
        Go Back Home
      </Link>
    </div>
  );
}
