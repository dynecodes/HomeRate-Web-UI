import React from 'react'
import Image from 'next/image'
import { FaCalendar, FaCalendarCheck, FaComment } from 'react-icons/fa6';
import { FaArrowRight, FaCalendarTimes } from 'react-icons/fa';


type Props = {
    blogs :{
        id: number,
        date: string,
        comment: string,
        title: string,
        shortDescription: string,
        image: string,
        }
}

const BlogCard = ({blogs}:Props) => {
    return (
            <div className="w-full h-[100%]   overflow-hidden group bg-white rounded-lg shadow-lg cursor-pointer">
            {/* Image */}
            <div className="relative">
                <Image
                src={blogs.image}
                alt={blogs.title}
                width={500}
                height={500}
                className="w-full object-cover group-hover:scale-110 transition-all duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-3">
                <h1 className="mt-5 text-black text-xl group-hover:underline font-serif">
                {blogs.title}
                </h1>
                <p className="text-sm text-gray-500 mt-3 line-clamp-3 mb-5">{blogs.shortDescription}</p>
                    {/* Features row */}
                    <div className="flex items-center justify-between mt-auto ">
                    <div className="flex items-center gap-2">
                        <FaCalendar  className="text-red-600" />
                        <p className="text-sm text-gray-500">{blogs.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaComment className="text-rose-600  " />
                        <p className="text-sm text-gray-500">{blogs.comment}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 pb-4 flex flex-row space-x-3 ">
                <h1 className='text-black'>Read More</h1>
                <FaArrowRight className='text-black mt-1'/>
            </div>
        </div>
    );
};

export default BlogCard
