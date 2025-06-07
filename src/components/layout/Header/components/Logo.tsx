import React from "react";
import MobileMenu from "./MobileMenu";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <MobileMenu />
      <h1 className="font-extrabold text-2xl">SHOP.CO</h1>
    </div>
  );
};

export default Logo;
