// import { navLinks } from '@/constant/constant'
// import Link from 'next/link'
// import React from 'react'
// import { CgClose } from 'react-icons/cg'



// type Props = {
//     showNav: boolean
//     closeNav: () => void
// }

//     const MobileNav = ({ closeNav, showNav }: Props) => {
//     const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"

//     return (
//         <div>
//         {/* Overlay */}
//         <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 inset-x-full h-screen`}></div>
//         {/* navLinks */}
//         <div  className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col
//             h-full w-[80%] sm:w-[60%] bg-red-800 space-y-6 z-[10000]`}
//             >
//         {navLinks.map((navlink)=>{
//                         return (
//                             <Link key={navlink.id} href={navlink.url}>
//                                 <p className='text-[20px] text-white ml-12  pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-black '>
//                                     {navlink.label}
//                                 </p>
//                             </Link>
//                         )
//                     })}  
//           {/* Close Button */}
//         <CgClose
//             onClick={closeNav}
//             className="absolute top-4 right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 hover:text-black cursor-pointer"
//         />

//         </div>
//     </div>
//     )
// }

// export default MobileNav


"use client"
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    showNav: boolean
    closeNav: () => void
    }

    const MobileNav = ({ closeNav, showNav }: Props) => {
    return (
        <AnimatePresence>
        {showNav && (
            <>
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-[1000] bg-black"
                onClick={closeNav}
            />

            {/* Sidebar Nav */}
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="fixed flex flex-col justify-center h-full w-[80%] sm:w-[50%] bg-red-800 space-y-6 z-[10000] text-white"
            >
                {/* Close Button */}
                <CgClose
                onClick={closeNav}
                className="absolute top-4 right-6 sm:w-5 sm:h-5 w-6 h-6 hover:text-black cursor-pointer"
                />

                {/* Nav Links with staggered animation */}
                <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                    hidden: {},
                    show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                    },
                }}
                className="flex flex-col space-y-6 ml-12"
                >
                {navLinks.map((navlink) => (
                    <motion.div
                    key={navlink.id}
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        show: { opacity: 1, x: 0 },
                    }}
                    >
                    <Link href={navlink.url}>
                        <p className="text-[20px] sm:text-[30px] font-medium hover:text-black cursor-pointer">
                        {navlink.label}
                        </p>
                    </Link>
                    </motion.div>
                ))}
                </motion.div>
            </motion.div>
            </>
        )}
        </AnimatePresence>
    )
}

export default MobileNav
