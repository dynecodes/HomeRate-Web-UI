// "use client";
// import { useState } from "react";
// import React from 'react';
// import Image from 'next/image';
// import { Inter } from "next/font/google";

// const inter = Inter({
//     subsets: ["latin"],
//     weight: ["300", "400", "600", "700"], 
// });

// type Props = {
//     buildings: {
//         id: number,
//         title: string,
//         description: string,
//         image: string,
//     }
// }



// const BuildingFeatureCard = ({buildings}: Props) => {
//     const [rotate, setRotate] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
//         const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
//         setRotate({ x, y });
//     };

//     const reset = () => setRotate({ x: 0, y: 0 });
//     return (
//             <div
//                     onMouseMove={handleMouseMove}
//                     onMouseLeave={reset}
//                     className="rounded-lg shadow-lg p-6 transition-transform duration-300 ease-out relative bg-white"
//                     style={{
//                         transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
//                     }}
//                 >
//                 <div className="absolute top-2 right-4">
//                     <Image src={buildings.image} alt="Image" width={50} height={50} />
//                     </div>
//                         <div className={`text-2xl text-red-500 font-extrabold ${inter.className}`}>O{buildings.id}
//                         <div className="mt-1 text-black font-extrabold text-2xl">{buildings.title}
//                         <div className="mt-2 text-gray-400 font-normal text-lg">{buildings.description}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
        

// export default BuildingFeatureCard;

"use client";
import { useState } from "react";
import React from 'react';
import Image from 'next/image';
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"], 
});

type Props = {
    buildings: {
        id: number,
        title: string,
        description: string,
        image: string,
    }
}

const BuildingFeatureCard = ({ buildings }: Props) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
        setRotate({ x, y });
    };

    const reset = () => setRotate({ x: 0, y: 0 });

    return (
        <div
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className="w-80 h-40 rounded-lg shadow-lg p-6 transition-transform duration-300 ease-out relative bg-white overflow-hidden flex flex-col"
        style={{
            transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        >
        {/* Top image */}
        <div className="absolute top-2 right-4">
            <Image src={buildings.image} alt="Image" width={50} height={50} />
        </div>

        {/* Content */}
        <div className={`text-2xl text-red-500 font-extrabold ${inter.className}`}>
            O{buildings.id}
        </div>
        <div className="mt-1 text-black font-extrabold text-xl">
            {buildings.title}
        </div>
        <div className="mt-2 text-gray-400 font-normal text-sm line-clamp-4">
            {buildings.description}
        </div>
        </div>
    )
}

export default BuildingFeatureCard;
