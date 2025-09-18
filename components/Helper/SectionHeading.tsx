import React from 'react'

type Props={
    heading: string;

}

const SectionHeading = ({heading}: Props) => {
    return (
        <div>
            <h1 className='text-2xl sm-text-3x1 font-bold mb-2 text-black'>
                {heading}</h1>
            <p></p>
        
        </div>
    )
}

export default SectionHeading
