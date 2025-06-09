"use client";
import React from "react";
import { CircleUser, ShoppingCart } from "lucide-react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Link from "next/link";
import SearchBox from "./components/SearchBox";
import { useCartStore } from "@/store/cart";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="flex items-center justify-between md:justify-evenly md:gap-5 p-2">
      <Logo />
      <Menu />
      <div className="flex items-center gap-3">
        <SearchBox />

        <Link href="/cart" className="relative">
          <ShoppingCart className="cursor-pointer" />
          {totalQuantity > 0 && (
            <Badge className="absolute -top-2 -right-2 rounded-full text-xs px-2 py-0.5">
              {totalQuantity}
            </Badge>
          )}
        </Link>

        <Link href="/profile">
          <CircleUser className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
