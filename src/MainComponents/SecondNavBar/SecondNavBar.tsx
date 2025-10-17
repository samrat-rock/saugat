"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SecondNavBar = () => {
    const [open, setOpen] = useState(false);

    const categories = [
        "Fresh",
        "MX Player",
        "sell",
        "BestSellers",
        "Today's Deals",
        "Mobile",
        "New Releases",
        "Electronics",
        "Customer Service",
        "Home & Kitchen",
        "Prime",
        "Fashion",
        "Amazon Pay",
        "Computers",
        "Books",
        "Home Improvement",
    ];

    return (
        <div className="relative w-full bg-slate-900">
            {/* Transparent Top Bar */}
            <div className="flex items-center gap-4 text-white px-4 py-2 text-sm backdrop-blur-md bg-transparent">
                {/* Hamburger + All Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 bg-transparent border-none outline-none cursor-pointer"
                >
                    <FaBars className="text-lg" />
                    <span className="font-semibold">All</span>
                </button>

                <div className="flex-1  whitespace-nowrap">
                    {categories.map((item, idx) => (
                        <span
                            key={idx}
                            className="cursor-pointer inline-block px-3 py-1 hover:underline font-semibold"
                        >
                            {item}
                        </span>
                    ))}
                </div>

            </div>


            {open && (
                <div
                    className="fixed inset-0 bg-transparent z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* Slide Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Blue Header */}
                <div className="bg-[#232f3e] text-white p-4">
                    <h2 className="text-lg font-bold">Hello, Sign in</h2>
                </div>

                {/* Sidebar Content */}
                <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
                    <h3 className="font-semibold text-gray-700 mb-3">Trending</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="cursor-pointer hover:text-black">Best Sellers</li>
                        <li className="cursor-pointer hover:text-black">New Releases</li>
                        <li className="cursor-pointer hover:text-black">Movers & Shakers</li>
                    </ul>

                    <h3 className="font-semibold text-gray-700 mt-5 mb-3">
                        Shop by Category
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                        <li className="cursor-pointer hover:text-black">Mobiles</li>
                        <li className="cursor-pointer hover:text-black">Electronics</li>
                        <li className="cursor-pointer hover:text-black">Home & Kitchen</li>
                        <li className="cursor-pointer hover:text-black">Fashion</li>
                    </ul>
                </div>
            </div>

            {/* Floating Close Button (outside panel) */}
            {open && (
                <button
                    onClick={() => setOpen(false)}
                    className="fixed top-3 left-72 z-50 text-white text-3xl p-2 bg-transparent"
                >
                    <IoClose />
                </button>
            )}
        </div>
    );
};

export default SecondNavBar;
