import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import UserReviewSlider from './UserReviewSlider'



const UserReviewProperties = () => {
    return (
        <div className='pt-16 pb-40'>
            <div className='w-[95%] mx-auto'>
                <SectionHeading heading='Reviews' />
                <div className="mt-10 md:mt-8">
                    <UserReviewSlider/>
                </div>
            </div>
        
        </div>
    )
}

export default UserReviewProperties
