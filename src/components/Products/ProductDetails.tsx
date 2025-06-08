"use client";
import { getProductBySlug } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { FaCheck, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useCartStore } from "@/store/cart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CustomBreadcrumb from "./BreadCrumb";

type Product = Awaited<ReturnType<typeof getProductBySlug>>;

const ProductDetails = ({ product }: { product: Product }) => {
  const images = product.images;
  const colors = product.colors;
  const sizes = product.sizes;

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6 mt-2 border-t">
        <CustomBreadcrumb
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            {
              label:
                product.category.charAt(0).toUpperCase() +
                product.category.slice(1),
              href: `/shop/${product.category}`,
            },
            { label: product.title },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Images + Details */}
        <div className="md:hidden w-full">
          <Swiper spaceBetween={10} slidesPerView={1} className="rounded-xl">
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img}
                  alt={`Product ${i}`}
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:flex gap-4">
          <div className="flex flex-col gap-4">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="Thumbnail"
                width={80}
                height={80}
                className={`rounded-md border-2 cursor-pointer ${
                  selectedImage === img ? "border-black" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="flex-1">
            <Image
              src={selectedImage}
              alt="Main Image"
              width={500}
              height={500}
              className="rounded-xl object-cover w-full"
            />
          </div>
        </div>

        {/* Right Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="text-sm text-gray-500">{product.rating}/5</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold">${product.price}</p>
            <p className="line-through text-gray-400 text-lg">
              ${product.originalPrice}
            </p>
            <span className="bg-red-100 text-red-500 px-2 py-0.5 rounded-full text-xs">
              -
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              %
            </span>
          </div>

          <p className="text-sm text-gray-600 max-w-md">
            {product.description}
          </p>

          {/* Colors */}
          <div>
            <p className="text-sm font-medium mb-2">Select Colors</p>
            <div className="flex gap-3">
              {colors.map((color, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer relative flex items-center justify-center hover:ring-2 ring-offset-1`}
                  style={{ backgroundColor: color }}
                >
                  {selectedColor === color && (
                    <FaCheck className="text-white text-sm" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="text-sm font-medium mb-2">Choose Size</p>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`cursor-pointer px-4 py-2 rounded-full border text-sm font-medium ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Cart */}
          <div className="flex gap-4 items-center mt-4">
            <div className="flex items-center border rounded-full overflow-hidden">
              <button
                className="cursor-pointer px-4 py-2"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="cursor-pointer px-4 py-2"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                addToCart({
                  slug: product.slug,
                  title: product.title,
                  price: product.price,
                  quantity,
                  image: product.images[0],
                })
              }
              className="bg-black text-white px-8 py-3 rounded-full font-medium cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
