import { create } from "zustand";

type CartItem = {
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.slug === item.slug);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.slug === item.slug
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
}));
