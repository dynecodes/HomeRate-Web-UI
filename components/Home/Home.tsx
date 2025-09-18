
"use client"
import React from 'react'
import { motion, Variants } from "framer-motion"
import Hero from './Hero/Hero'
import ApartmentType from './Apartment/ApartmentType'
import Properties from './Properties/Properties'
import CityProperties from './CityProperty/CityProperties'
import BuildingFeature from './BuildingFeature/BuildingFeature'
import Blog from './Blog/Blog'
import UserReviewProperties from './UserReview/UserReviewProperties'
import Footer from './Footer/Footer'

// ✅ Parent container variants (controls staggered children)
const containerVariant: Variants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.2,
        },
    },
    }

    // ✅ Each child fade-up variant
    const childVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
}

// ✅ Wrapper for each section
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.section
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
        className="overflow-hidden"
    >
        <motion.div variants={childVariant}>{children}</motion.div>
    </motion.section>
    )

    const Home = () => {
    return (
        <div className="overflow-hidden">
        <SectionWrapper><Hero /></SectionWrapper>
        {/* <SectionWrapper><ApartmentType /></SectionWrapper> */}
        <SectionWrapper><Properties /></SectionWrapper>
        <SectionWrapper><CityProperties /></SectionWrapper>
        <SectionWrapper><BuildingFeature /></SectionWrapper>
        <SectionWrapper><Blog /></SectionWrapper>
        <SectionWrapper><UserReviewProperties /></SectionWrapper>
        <SectionWrapper><Footer /></SectionWrapper>
        </div>
    )
}

export default Home
