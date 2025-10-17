"use client";
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface Category {
  title: string;
  subCategories?: string[];
}

const categories: Category[] = [
  {
    title: "Mobiles & Accessories",
    subCategories: [
      "Mobile Phones",
      "Mobile Accessories",
      "Power Banks",
      "Data Cables",
      "Chargers",
    ],
  },
  {
    title: "Laptops & Accessories",
    subCategories: [
      "Laptops",
      "Laptop Bags",
      "Mouse & Keyboards",
      "Storage Devices",
    ],
  },
  {
    title: "TV & Home Entertainment",
    subCategories: [
      "Televisions",
      "Home Theatres",
      "Projectors",
    ],
  },
  {
    title: "Audio & Musical Instruments",
    subCategories: ["Headphones", "Speakers", "Musical Instruments"],
  },
  {
    title: "Cameras & Accessories",
    subCategories: ["Digital Cameras", "Lenses", "Tripods"],
  },
];

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="w-64 border-r border-gray-200 p-4 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto bg-white">
      <h2 className="text-lg font-bold mb-4">Electronics</h2>

      {categories.map((category, idx) => (
        <div key={idx} className="mb-3">
          <button
            onClick={() => toggleCategory(idx)}
            className="flex justify-between items-center w-full font-medium text-gray-700 hover:text-black"
          >
            {category.title}
            {openIndex === idx ? (
              <IoChevronUp className="ml-2" />
            ) : (
              <IoChevronDown className="ml-2" />
            )}
          </button>

          {openIndex === idx && category.subCategories && (
            <ul className="mt-2 pl-4 space-y-1 text-gray-600">
              {category.subCategories.map((sub, i) => (
                <li
                  key={i}
                  className="hover:text-black cursor-pointer text-sm"
                >
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Optional: Brands section */}
      <div className="mt-6">
        <h3 className="text-md font-semibold mb-2">Top Brands</h3>
        <ul className="space-y-1 text-gray-600">
          {[
            "Samsung",
            "Apple",
            "OnePlus",
            "Mi",
            "Sony",
            "LG",
            "Motorola",
            "Realme",
          ].map((brand, i) => (
            <li key={i} className="hover:text-black cursor-pointer text-sm">
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
