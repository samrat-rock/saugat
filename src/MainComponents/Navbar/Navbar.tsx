import Image from 'next/image'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import SearchBar from '../SearchBar/SearchBar';
import LanguageSwitcher from '../languageToggle/LanguageToggle';
import LoginPanel from '../LoginPanel/LoginPanel';
import HomeCart from '../HomeCart/HomeCart';

const Navbar = () => {
  return (
    <>
      <nav className='bg-black md:flex gap-2 '>
        <div className='pt-3 pl-4 '>
          <Image src="/logo.jpg" alt='' height={100} width={100} />
        </div>
        <div className='text-white pb-2 pt-4 '>
          <span className='text-gray-100 pl-7 text-sm text'> Delivering to mumbai 40001
            <span className='flex  md:text-xl font-bold items-center'><IoLocationOutline className='md:text-xl ml-2 ' />Update Location</span>
          </span>

        </div>

        <SearchBar />

        <div className='flex items-center'>
          <div className='px-2'>
            <LanguageSwitcher />
          </div>
          <LoginPanel />

          <div className="text-white px-8  leading-tight cursor-pointer">
       
       t     <p className="text-xs">Returns</p>
            <p className="font-bold text-sm">& Orders</p>
          </div>

          <HomeCart/>




        </div>

      </nav>
    </>
  )
}

export default Navbar