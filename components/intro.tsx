"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';

import { BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
    <section 
    ref={ref}
    id='home'
    className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                type: "tween",
                duration: 0.2,
                }}
                >
                    <Image
                    src="/AdiGradProfile.jpg"
                    alt="Adi portrait"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="h-30 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>

                <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
                }}
                >
                    👋
                </motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl'
        initial={{ opacity:0, y: 100}}
        animate={{ opacity:1, y: 0}}
        >
            <span className='font-bold'>Hello, I&apos;m Adi.</span> 
            {" "}I am a highly skilled and motivated software engineer located in <span className='font-bold'>San Francisco, CA.</span> 
            {" "}I am passionate about building scalable and efficient software solutions, that can be used to solve real world problems. 
            {" "}I recently graduated with a <span className='font-bold'>Master&apos;s degree in Computer Science</span> from the University of San Francisco, with an <span className='italic'>GPA of 3.9/4.0.</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity:1, y: 0 }}
            transition= {{ delay: 0.1, }}>
            {/* Contact me here button */}
            <Link 
                href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                onClick={() => {
                    setActiveSection("Contact")
                    setTimeOfLastClick(Date.now())
                }}
                >
                Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>
            {/* Download CV Button */}
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-110 hover:scale-110 active:scale-105 transition
            cursor-pointer borderBlack
            dark:bg-white/10 dark:text-white/60 dark:hover:text-white'
            href='/Aditya Kunatharaju Resume May24.pdf' download={true}>
                Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>
            
            {/* LinkedIn and GitHub links */}
            <a className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full
            outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
            cursor-pointer borderBlack
            dark:bg-white/10 dark:text-white/60 dark:hover:text-white'
            href='https://www.linkedin.com/in/adityakunatharaju/' target='_blank'>
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 flex text-gray-700 items-center gap-2 text-[1.35rem] rounded-full
            outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
            cursor-pointer borderBlack
            dark:bg-white/10 dark:text-white/60 dark:hover:text-white'
            href='https://github.com/aditya17varma' target='_blank'>
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
