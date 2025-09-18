"use client"
import { cities, userReviewData } from '@/data/data';
import React from 'react'
// import Carousel from 'react-multi-carousel';
import dynamic from "next/dynamic";
import 'react-multi-carousel/lib/styles.css';
import UserReviewDataCard from './UserReviewCard';

// Dynamically import Carousel so it only runs on the client
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const UserReviewSlider = () => {
    return (
        <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}>
        {userReviewData.map((userReviewData)=>{
            return <div key={userReviewData.id}>
                {/* UserReviewSlider card */}
                <UserReviewDataCard userReviewData={userReviewData}/>
            </div>
        })}
        </Carousel>
    )
}

export default UserReviewSlider
