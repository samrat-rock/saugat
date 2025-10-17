import React from 'react'
import Sidebar from '@/Sidebar/Sidebar'

const page = () => {
  return (
    <div>
        <div className='flex items-center justify-evenly border-b-2'>   
        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-sm font-bold font-sans tracking-wider hover:cursor-pointer active:border-x-blue-900'>
            Electronics
        </div>

        <div className='p-4  border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
            Mobile and Accessories
        </div>

        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
           Laptops & Acessories
        </div>
        
        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
           TV & Home Entertainment
        </div>

        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
          Audio
        </div>

        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
           Cameras
        </div>

        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
           Computer Peripherals
        </div>

        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
           Smart Technology
        </div>

        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
           Musical Instruments
        </div>

        <div className='p-4 border-x-4 border-x-transparent text-gray-700 text-xs font-medium font-sans tracking-wide hover:cursor-pointer hover:underline decoration-2 underline-offset-2 decoration-orange-400 active:border-x-gray-800'>
           Office & Stationery
        </div>
        </div>
        {
         
        }
        <div className='flex'>
            <Sidebar/>
        </div>
    </div>
    
  )
}

export default page