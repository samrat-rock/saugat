
"use client";
import React, { useState } from 'react'
import Sidebar from '@/Sidebar/Sidebar'

const page = () => {
   const [isOpen, setIsOpen] = useState(false);   

   const mobile = [
      { category: "Mobile", link: "/page" },
      { category: "Mobile Acessories", link: "/page" },
      { category: "Cases and Covers", link: "/page" },
      { category: "Screen Guards", link: "/page" },
      { category: "Power Bank", link: "/page" },
      { category: "Data Cables", link: "/page" },
      { category: "Chargers", link: "/page" },
      { category: "Selfie Sticks", link: "/page" },
      { category: "Skin Stickers", link: "/page" },
      { category: "Mounts & Stands", link: "/page" },
      { category: "Lens Kits", link: "/page" },
      { category: "Replacement Parts", link: "/page" },
   ];

   const mobile_brands = [
      { category: "Mi", link: "/page" },
      { category: "OnePlus", link: "/page" },
      { category: "Samsung", link: "/page" },
      { category: "Huawei", link: "/page" },
      { category: "Apple", link: "/page" },
      { category: "Motorola", link: "/page" },
      { category: "Nokia", link: "/page" },
      { category: "Vivo", link: "/page" },
      { category: "10.or", link: "/page" },
      { category: "Coolpad", link: "/page" },
      { category: "Honor", link: "/page" },
      { category: "Lenovo", link: "/page" },
      { category: "LG", link: "/page" },
      { category: "Micromax", link: "/page" },
   ];

   const acessories_brand = [
      { category: "OnePlus", link: "/page" },
      { category: "AmazonBasics", link: "/page" },
      { category: "Intex", link: "/page" },
      { category: "Ambrane", link: "/page" },
      { category: "Lenovo", link: "/page" },
      { category: "Spigen", link: "/page" },
      { category: "Jabra", link: "/page" },
      { category: "Apple", link: "/page" },
      { category: "Syska", link: "/page" },
      { category: "Boat", link: "/page" },
      { category: "Mivi", link: "/page" },
      { category: "iVoltaa", link: "/page" },
   ];

   return (
      <div>
         <div className='flex items-center justify-evenly border-b-2'>
            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-sm font-bold tracking-wider hover:cursor-pointer active:border-x-blue-900'>
               Electronics
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'
               
               >
               Mobile and Accessories
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
               Laptops & Acessories
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
               TV & Home Entertainment
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
               Audio
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
               Cameras
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
               Computer Peripherals
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
               Smart Technology
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
               Musical Instruments
            </div>

            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
               Office & Stationery
            </div>
         </div>
         

         <div className='flex'>
            <Sidebar />
         </div>
      </div>
   )
}

export default page;
=======
import React from "react";
import Sidebar from "@/ElectronicsComponents/Sidebar/Sidebar";
import SecondNavBar from "@/MainComponents/SecondNavBar/SecondNavBar";
import Electronic from "@/ElectronicsComponents/ElectronicNavBar/ElectronicNavBar";

const Page = () => {
  return (
    <>
      {/* Top Navbars */}
      <SecondNavBar />
      <Electronic />

      {/* Main Content + Sidebar */}
      <div className="flex mt-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* Replace this with your product grid or content */}
          <h1 className="text-2xl font-bold mb-4">Electronics Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example product cards */}
            <div className="border p-4">Product 1</div>
            <div className="border p-4">Product 2</div>
            <div className="border p-4">Product 3</div>
            <div className="border p-4">Product 4</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page
