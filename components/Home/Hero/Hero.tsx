import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'

const Hero = () => {
    return (
        <div
        className="w-full pt-[4vh] md:pt-[5vh] h-screen bg-black overflow-hidden relative bg-[url('/images/hero.png')] bg-cover bg-center">
        {/* block overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* content */}
        <div className="flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10">
            <h1 className='text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium'>
            Discover Your Perfect 
            </h1>
            <h1 className='text-5xl md:text-7xl lg:text-8xl text-rose-600 font-bold'
            >Home</h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-200 mt-4">
                Over 188,000 spaces & plots available</p>
            <div className="mt-1 w-full">
                <SearchBox/>
            </div>
        </div>
    
        </div>
    )
}

export default Hero
