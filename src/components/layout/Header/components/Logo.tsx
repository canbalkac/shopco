import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <MobileMenu />
      <Link href={"/"}>
        <h1 className="font-extrabold text-2xl">SHOP.CO</h1>
      </Link>
    </div>
  );
};

export default Logo;
