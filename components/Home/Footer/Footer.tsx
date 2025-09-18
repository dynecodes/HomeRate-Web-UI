

import React from 'react'
import { FaFacebook, FaHouse, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className='w-full bg-black text-white pt-10 pb-6'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 w-[90%] xl:w-[80%] mx-auto">
            
            {/* LOGO + INFO */}
            <div>
            <div className="flex items-center space-x-3">
                <div className="text-red-600 text-3xl">
                <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="object-contain"/>                 
                </div>
                <h1 className='font-bold text-2xl'>HomeRate</h1>      
            </div> 
            <p className="mt-3 text-gray-400 text-sm">
                Your trusted partner in finding your dream home.
            </p>  
            <p className='mt-3 text-sm'>homerate@gmail.com</p> 
            <p className='text-sm'>+018 67328 498</p>  
            <div className="flex mt-4 space-x-4">
                <FaFacebook className='text-blue-600 text-2xl cursor-pointer'/>
                <FaTwitter  className='text-blue-300 text-2xl cursor-pointer'/>
                <FaInstagram className='text-pink-700 text-2xl cursor-pointer'/>
                <FaYoutube className='text-red-700 text-2xl cursor-pointer'/>
            </div>    
            </div>        

            {/* Popular Search */}
            <div>
            <h1 className='font-bold text-xl mb-3'>Popular Search</h1> 
            <ul className="space-y-2">
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Apartment for Rent</li>  
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Apartment Low to Hide</li>  
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Offices for Buy</li>  
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Offices for Rent</li>  
            </ul>
            </div> 

            {/* Quick Link */}
            <div>
            <h1 className='font-bold text-xl mb-3'>Quick Link</h1> 
            <ul className="space-y-2">
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Terms of Use</li>
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Privacy Policy</li>
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Pricing Plans</li>
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Our Services</li>
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Contact Support</li>
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Careers</li>
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>FAQs</li>
            </ul>
            </div>           

            {/* Discover */}
            <div>
            <h1 className='font-bold text-xl mb-3'>Discover</h1> 
            <ul className="space-y-2">
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Miami</li>  
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Los Angeles</li>  
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>Chicago</li>  
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>New York</li>  
                <li className='text-gray-400 hover:text-red-600 cursor-pointer'>London</li>  
            </ul>
            </div> 

        {/* Copyright */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-4 
          text-center text-sm text-gray-400 border-t border-gray-700 pt-4 mt-6">
          © 2025 dynecodes. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

