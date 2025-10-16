"use client";
import React from "react";
import { ShoppingCart } from "lucide-react"; 

const HomeCart = () => {
  return (
    <div className="relative flex items-center text-white cursor-pointer hover:text-yellow-400 transition">
      <span className="absolute -top-1 left-5 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
        0
      </span>

    
      <ShoppingCart size={28} strokeWidth={2.2} className="text-white" />

      
      <div className="ml-3">
        <p className="text-sm font-semibold">Cart</p>
      </div>
    </div>
  );
};

export default HomeCart;
