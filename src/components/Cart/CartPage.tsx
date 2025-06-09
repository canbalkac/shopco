"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import CustomBreadcrumb from "../Products/BreadCrumb";

export default function CartPage() {
  const { cart, addToCart } = useCartStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const originalTotal = cart.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const discount = originalTotal - subtotal;
  const discountRate =
    originalTotal > 0 ? Math.round((discount / originalTotal) * 100) : 0;
  const deliveryFee = 15;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <CustomBreadcrumb
        crumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
      />

      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-muted-foreground">
          Your cart is empty.{" "}
          <Link href="/shop" className="underline text-primary">
            Go shopping →
          </Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT - CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.slug}
                className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      Size: {item.size} <br /> Color:{" "}
                      <span
                        className={`w-8 h-8 rounded-full relative flex items-center justify-center`}
                        style={{ backgroundColor: item.color }}
                      ></span>
                    </p>
                    <p className="mt-2 font-semibold">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    className="p-2 border rounded-full"
                    onClick={() => addToCart({ ...item, quantity: -1 })}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    className="p-2 border rounded-full"
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() =>
                      useCartStore.setState((state) => ({
                        cart: state.cart.filter((i) => i.slug !== item.slug),
                      }))
                    }
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - SUMMARY */}
          <div className="border rounded-lg p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-red-500">
              <span>Discount (-{discountRate}%)</span>
              <span>- ${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 border px-3 py-2 text-sm rounded"
              />
              <button className="bg-black text-white px-4 rounded text-sm">
                Apply
              </button>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full font-medium mt-4">
              Go to Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
