"use client";
import { clear } from 'console';
import { Link } from 'lucide-react';
import { useState } from 'react'
import React, { use } from 'react'

const Electronic = () => {

   const [ShowDropdown, setShowDropdown] = useState(false);
   let hideTimeout: NodeJS.Timeout;

   const mobile = [
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
    ];
    const mobile_images=[{
      src:"/logo.jpg", alt:"loog"
    }];
     const mobile_brand_images=[{
      src:"/logo.jpg", alt:"loog"
    }]


   return (
      <div className='flex items-center justify-evenly border-b-2'>
         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-sm font-bold font-sans tracking-wider hover:cursor-pointer active:border-x-blue-900'>
            Electronics
         </div>

         <div className='relative'
            onMouseEnter={() => {
               clearTimeout(hideTimeout);
               setShowDropdown(true);

            }}
            onMouseLeave={() => {
               hideTimeout = setTimeout(() => {
                  setShowDropdown(false);
               });
            }}>
            <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
               Mobile and Accessories
            </div>
            {ShowDropdown && (
               <div className="left-0 top-full absolute flex  bg-white shadow-lg rounded-sm border border-gray-200 z-10 pl-20 pr-20 pb-6">
                  <div className='p-5 min-w-[250px]'>
                     <a href='#' className='py-1 text-xs font-bold font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950'>
                        Mobile
                     </a><br/>
                     <a href='#' className='py-1 text-xs font-bold font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950'>
                        Mobile Acessories
                     </a>
                     {mobile.map((item, index) => (
                        <a key={index} href={item.link} className=" block py-1 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950">
                           {item.category}
                        </a>
                     ))}
                  </div>

                  <div className='p-5 min-w-[250px]'>
                     <a href='#' className='py-1 text-xs font-bold font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950'>
                        Mobile Brands
                     </a><br/>
                     {mobile_brands.map((item, index) => (
                        <a key={index} href={item.link} className="block py-1 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950">
                           {item.category}
                        </a>
                     )
                     )}
                  </div>

                      <div className='p-5 min-w-[250px]'>
                     <a href='#' className='py-1 text-xs font-bold font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950'>
                        Mobile Brands
                     </a><br/>
                     {acessories_brand.map((item, index) => (
                        <a key={index} href={item.link} className="block py-1 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950">
                           {item.category}
                        </a>
                     )
                     )}
                  </div>
                  <div className='p-5 min-w-[250px] text-center'>
                     { mobile_images.map((img, index)=>(
                        <img key={index} src={img.src} alt={img.alt} className='w-48 h-auto'/>
                     ))}
                       <a href='#' className='py-1  text-xs font-bold font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950'>
                        Mobile <br/> see more
                     </a><br/>
                  </div>
                     <div className='p-5 min-w-[250px] text-center'>
                     { mobile_brand_images.map((img, index)=>(
                        <img key={index} src={img.src} alt={img.alt} className='w-48 h-auto'/>
                     ))}
                       <a href='#' className='py-1  text-xs font-bold font-sans tracking-wide hover:cursor-pointer hover:underline decoration-1 underline-offset-2 decoration-gray-950'>
                        Mobile Brands <br/> see more
                     </a><br/>
                  </div>
               </div>
            )}
         </div>


         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
            Laptops & Acessories
         </div>

         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
            TV & Home Entertainment
         </div>

         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
            Audio
         </div>

         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
            Cameras
         </div>

         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
            Computer Peripherals
         </div>

         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
            Smart Technology
         </div>

         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
            Musical Instruments
         </div>

         <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-blue-900'>
            Office & Stationery
         </div>
      </div>
   )
}

export default Electronic;