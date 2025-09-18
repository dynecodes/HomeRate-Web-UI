import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'

import CitySlider from './CitySlider'


const CityProperties = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[95%] mx-auto'>
                <SectionHeading heading='Explore Cities' />
                <div className="md:mt-8">
                    <CitySlider/>

                </div>
            </div>
        
        </div>
    )
}

export default CityProperties
