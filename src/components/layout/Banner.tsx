"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

const TopBanner = () => {
  const [isBannerClosed, setIsBannerClosed] = useState(false);
  if (!isBannerClosed) {
    return (
      <div className="relative flex items-center justify-center text-xs md:text-sm bg-black text-white p-1 gap-3">
        <p>Sign up and get 20% off to your first order. </p>
        <p className="underline font-semibold">Sign Up Now</p>
        <X
          size={16}
          className="hidden md:flex bg-black p-0 cursor-pointer hover:size-5"
          onClick={() => setIsBannerClosed(true)}
        />
      </div>
    );
  }
};

export default TopBanner;
