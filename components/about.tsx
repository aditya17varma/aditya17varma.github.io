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
            My ability to learn new skills allowed me to seamless transition into software engineering, I completed my Master&apos;s degree in Computer Science at the University of San Francisco with a <span className='italic'>GPA of 3.9/4.0</span>.
        </p>
        <p className='mb-3'>
            My educational journey has been diverse, including a <strong>Bachelor of Laws</strong> from O.P. Jindal Global University, and a Bachelor of Arts in History from the University of California, Los Angeles. 
            Prior work experience includes working as a lawyer in New Delhi, India, and as a legal assistant in Los Angeles, CA.
        </p>
            <strong>Relevant coursework</strong> includes: Machine Learning, Intro to AI, Algorithms, Full-Stack Development, Network Programming, Modern Parallel Programming, and Human-Computer Interaction.
        <p className='mb-3'>
            My diverse educational and work experience has given me a unique perspective on problem solving, and the ability to think outside the box. 
            It has also made me a strong communicator, and team player. I&apos;m a strong self-learner, always seeking to enhance my knowledge and skill set.
        </p>
        <p className='mb-3'>
            Outside the classroom, I am an avid athlete, and enjoy playing golf and running. I recently completed my first marathon!
        </p>
    </motion.section>
  )
}
