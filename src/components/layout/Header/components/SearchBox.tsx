"use client";
import React, { useState } from "react";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { Search } from "lucide-react";

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`flex items-center justify-center md:bg-gray-200 rounded-full ${
        isFocused ? "border border-gray-400" : "border border-transparent"
      }`}
    >
      <Label htmlFor="search-box" className="cursor-pointer">
        <Search className="ml-3" aria-label="Search Button" />
      </Label>
      <Input
        type="text"
        id="search-box"
        className="hidden md:flex p-0.5 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0 border-0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search for products..."
      />
    </div>
  );
};

export default SearchBox;
