import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  slug: string;
  title: string;
  price: number;
  size: string;
  color: string;
  originalPrice: number;
  quantity: number;
  image: string;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const existing = get().cart.find((i) => i.slug === item.slug);
        if (existing) {
          set({
            cart: get().cart.map((i) =>
              i.slug === item.slug
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ cart: [...get().cart, item] });
        }
      },
    }),
    {
      name: "shopco-cart",
    }
  )
);
