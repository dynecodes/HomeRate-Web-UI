import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import { blogs } from '@/data/data'
import BlogCard from './BlogCard'

const Blog = () => {
return (
        <div className='pb-20 pt-16'>
            <div className='w-[95%] mx-auto'>
                <SectionHeading heading='Blogs' />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 md:mt-8 gap-5">
                    {blogs.map((blogs)=>{
                        return (
                            <div key={blogs.id}>
                                <BlogCard blogs={blogs} />
                            </div>
                        )
                    })}
                </div>
            </div>        
        </div>
    )
}
export default Blog
