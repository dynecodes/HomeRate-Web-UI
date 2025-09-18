import React from 'react'
import Image from 'next/image'
import { FaStar  } from 'react-icons/fa6'

type Props = {
    userReviewData: {
        id: number,
        name: string,
        profession: string,
        userImage: string,
        review: string,
    }
}


const UserReviewDataCard = ({userReviewData}:Props) => {
    return (
        <div className='relative rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300'>
            <div className="flex flex-row items-center justify-start space-x-2">
            {Array(5).fill(0).map((_, i) => (
            <FaStar key={i} className='text-2xl text-amber-400' />
            ))}
            </div>
            <p className='mt-2 text-lg text-gray-500'>{userReviewData.review} Properties</p>
        <div className="mt-12 flex flex-row items-center space-x-4">   
            <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image
                    src={userReviewData.userImage}
                    alt="User"
                    width={50}
                    height={50}
                    className="object-cover w-full h-full"
                />
                </div>
                {/* <Image src = {userReviewData.userImage} alt="User" width={50} height={50} className='object-cover'/> */}
            <div className="flex flex-col">
                <h1 className='text-lg font-bold'>{userReviewData.name}</h1>  
                <h1 className='text-sm text-gray-500 font-normal'>{userReviewData.profession}</h1>    
            </div>        
        </div>           
    </div>
    )
                        
}

export default UserReviewDataCard
