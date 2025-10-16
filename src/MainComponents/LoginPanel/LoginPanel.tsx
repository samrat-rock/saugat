"use client";
import React, { useState } from "react";

const LoginPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
    
      <button className="text-white text-sm font-medium flex flex-col items-start">
        <span className="text-xs text-gray-200">Hello, sign in</span>
        <span className="font-bold">Accounts & Lists</span>
      </button>

      {isOpen && (
        <div className="absolute right-5 mt-2 w-[450px] h-[490px] bg-white shadow-lg rounded-sm border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200 text-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 w-56 text-white py-1 font-medium rounded-sm">
              Sign in
            </button>
            <p className="text-xs mt-2">
              New customer?{" "}
              <a href="#" className="text-blue-600 underline">
                Start here.
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 text-sm">
            <div className="border-r-2 ">
              <h4 className="font-bold text-md mb-2">Your Lists</h4>
              <ul className="space-y-1 text-gray-700">
                <li className="hover:underline cursor-pointer">Create a Wish List</li>
                <li className="hover:underline cursor-pointer">Wish from Any Website</li>
                <li className="hover:underline cursor-pointer">Baby Wishlist</li>
                <li className="hover:underline cursor-pointer">Discover Your Style</li>
                <li className="hover:underline cursor-pointer">Explore Showroom</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-md mb-2">Your Account</h4>
              <ul className="space-y-1 text-gray-700 text-md">
                <li className="hover:underline cursor-pointer">Your Account</li>
                  <li className="hover:underline cursor-pointer">Your order</li>
                <li className="hover:underline cursor-pointer">Your Wish List</li>
                  <li className="hover:underline cursor-pointer">Keep Shopping</li>
                <li className="hover:underline cursor-pointer">Your Recommendations</li>
                <li className="hover:underline cursor-pointer">Your Prime Membership</li>
                  <li className="hover:underline cursor-pointer">Your Prime Video</li>
                <li className="hover:underline cursor-pointer">Your subscribe $ Save Items</li>
                  <li className="hover:underline cursor-pointer">Memberships & Subscription</li>
                    <li className="hover:underline cursor-pointer">Your Seller Account</li>
                      <li className="hover:underline cursor-pointer">Manage Your Content and Devices</li>
                        <li className="hover:underline cursor-pointer">Register for a free Business Account</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPanel;
