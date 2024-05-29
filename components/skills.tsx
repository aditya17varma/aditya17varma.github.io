"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsLanguages, skillsTools } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    }),
};

export default function Skills() {
    const { ref } = useSectionInView('Skills');
    return (
    <section 
    ref={ref}
    id='skills'
    className='mb-28 max-w-[53rem]
    scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <h3 className='text-xl font-medium mt-10 mb-5'>Languages</h3>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsLanguages.map((skill, index) => (
                <motion.li className='bg-white borderBlack rounded-xl px-5 py-3
                hover:border-orange-400
                dark:bg-white/10 dark:text-white/80'
                key={index}
                variants = {fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
                custom={index}
                >{skill}
                </motion.li>
            ))}
        </ul>

        <h3 className='text-xl font-medium mt-10 mb-5'>Framewokrs, Libraries & Tools</h3>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsTools.map((skill, index) => (
                <motion.li className='bg-white borderBlack rounded-xl px-5 py-3
                hover:border-orange-400
                dark:bg-white/10 dark:text-white/80'
                key={index}
                variants = {fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
                custom={index}
                >{skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}
