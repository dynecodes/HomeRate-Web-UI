"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { navLinks } from '@/constant/constant'
import Image from 'next/image'

type Props ={
    openNav:() => void
}

const Navbar = ({openNav}:Props) => {
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90) setNavBg(true)
            if(window.scrollY < 90) setNavBg(false)
        }
        window.addEventListener("scroll", handler)
        return ()=> {
            window.removeEventListener("scroll",handler)
        }
}, [])

    return (
        <div className= {`fixed ${navBg ? 'bg-gray-950':'bg-transparent'} h-[7vh] z-[100] w-full transition-all duration-200`}>
                <div className="flex items-center h-full justify-between w-full px-4">
                    {/* LOGO */}
                    <div className="flex items-start space-x-3 mt-1">
                        <div className="text-red-600 text-3xl flex items-center justify-center flex-col">
                        <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="object-contain"/>         
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-white font-bold text-sm md:text-xl lg:text-2xl mt-3">
                            Home
                            </h1>  
                            <h1 className="font-bold text-sm md:text-xl lg:text-2xl mt-3" style={{ color: "#FF0000" }}>
                            Rates
                            </h1>
                        </div>   

                    </div>
                {/*NAVLINK*/}
                <div className="lg:flex items-center justify-center space-x-2 md:space-x-1 lg:space-x-10 text-white hidden -mt-1">
                    {navLinks.map((navlink)=>{
                        return (
                            <Link key={navlink.id} href={navlink.url}>
                                <p className='font-sans text-lg hover:text-blue-300'>
                                    {navlink.label}
                                </p>
                            </Link>
                        )
                    })}
                </div>
                {/*LOGIN & REGISTER*/}
                    <div className="flex items-center justify-end space-x-5 -mt-4 -mb-4">
                        <div className="flex items-center cursor-pointer text-white space-x-1 hover:text-gray-300 transition-all 
                        duration-200">
                            <FaUserCircle className='w-5 h-5'/>   
                            <p className='ml-2 font-semi-bold text-sm md:text-sm lg:text-lg'> Login | Register</p> 
                    </div>
                    {/*BURGER MENU*/}               
                    <HiBars3BottomRight
                        onClick={openNav}
                        className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white hover:text-gray-300 lg:hidden'/>
                </div>  
            </div>         
        </div>
    )
}
export default Navbar

