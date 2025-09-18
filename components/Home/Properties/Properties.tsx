
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import PropertiesCard from './PropertiesCard'
import { properties } from '@/data/data'





const Properties = () => {
    return (
        <div className='pb-16 pt-10'>
            <div className='w-[95%] mx-auto'>
                <SectionHeading heading="Discover Properties" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-8 gap-5">
                    {properties.map((property)=>(
                        <div key={property.id}>
                            <PropertiesCard property={property} />
                        </div>
                    ))}
                </div>
            </div>        
        </div>
    )
}

export default Properties
