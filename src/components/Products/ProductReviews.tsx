"use client";

import { reviews } from "@/lib/reviews";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCheckCircle,
} from "react-icons/fa";

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const getStars = (rating: number) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++)
    stars.push(<FaStar key={`f${i}`} className="text-yellow-400" />);
  if (half)
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  while (stars.length < 5)
    stars.push(
      <FaRegStar key={`e${stars.length}`} className="text-yellow-400" />
    );
  return stars;
};

export default function ProductReviews() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 border-t mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          All Reviews ({reviews.length})
        </h2>
        <div className="flex gap-2">
          <select className="border px-2 py-1 rounded text-sm">
            <option value="latest">Latest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            Write a Review
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="border p-4 rounded-lg shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              {getStars(r.rating)}{" "}
              <span className="ml-2 text-sm text-gray-600">{r.rating}/5</span>
            </div>
            <div className="flex items-center gap-1 font-semibold">
              {r.name}
              <FaCheckCircle className="text-green-500 text-xs" />
            </div>
            <p className="text-sm text-gray-700">{r.comment}</p>
            <p className="text-xs text-gray-500">
              Posted on {formatDate(r.date)}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="border px-6 py-2 rounded-full text-sm">
          Load More Reviews
        </button>
      </div>
    </section>
  );
}
