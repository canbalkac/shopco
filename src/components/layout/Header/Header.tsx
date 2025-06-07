"use client";
import React from "react";
import { CircleUser, ShoppingCart } from "lucide-react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Link from "next/link";
import SearchBox from "./components/SearchBox";

const Header = () => {
  return (
    <div className="flex items-center justify-between md:justify-evenly md:gap-5 p-2">
      <Logo />
      <Menu />
      <div className="flex items-center gap-3">
        <SearchBox />
        <Link href="/cart">
          <ShoppingCart className="cursor-pointer" />
        </Link>
        <Link href="/profile">
          <CircleUser className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
