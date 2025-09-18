import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import BuildingFeatureCard from './BuildingFeatureCard'
import { buildings } from '@/data/data'


const BuildingFeature = () => {
    return (
        <div className='pb-6 pt-6'>
            <div className='w-[95%] mx-auto'>
                <SectionHeading heading = 'Explore Building Feature'/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:mt-8 gap-8"> 
                        {buildings.map((buildings)=>{
                            return <div key={buildings.id}>
                                <BuildingFeatureCard buildings={buildings}/>
                            </div>
                        })}

                    </div>
                </div>      
        </div>
    )
}

export default BuildingFeature


