"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';


export default function About() {
    const { ref } = useSectionInView('About', 0.75);
    
    return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
    scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate= {{ opacity:1, y:0 }}
    transition={{ delay: 0.175 }}
    id='about'
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
            I am a highly skilled and motivated software developer located in San Francisco, CA. 
            I am passionate about building scalable and efficient software solutions, that can be used to solve real world problems. 
            I recently completed my Master&apos;s degree in Computer Science at the University of San Francisco, with an GPA of 3.9/4.0.
        </p>
        <p className='mb-3'>
            My educational journey has been diverse, including a Bachelor of Laws from Jindal Global University, and a Bachelor of Arts in History from the University of California, Los Angeles. 
            Prior work experiene includes working as a corporate lawyer in New Delhi, India, and as a paralegal in Los Angeles, CA.
        </p>
            Relevant coursework includes: Machine Learning, Intro to AI, Algorithms, Full-Stack Development, Network Programming, Modern Parallel Programming, and Human-Computer Interaction.
        <p className='mb-3'>
            My diverse educational and work experience has given me a unique perspective on problem solving, and the ability to think outside the box. 
            It has also made me a strong communicator, and team player. I&apos;m a strong self-learner, always seeking to enhance my knowledge and skillset.
        </p>
        <p className='mb-3'>
            Outside the classroom, I am an avid athlete, and enjoy playing golf and running. I recently completed my first marathon!
        </p>
    </motion.section>
  )
}
