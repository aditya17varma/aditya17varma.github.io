"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'
import { ProjectType } from "@/lib/data";

import { motion } from 'framer-motion'

type ProjectProps = ProjectType & {
    onClick: () => void;

};

// Project Card Component
export default function ProjectCard({
    title,
    description,
    tags,
    imageUrl,
    onClick
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    
    // Controll the scroll animation
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <motion.div ref={ref} 
        style = {{
            scale: scaleProgress,
            opacity: opacityProgress
        
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
        onClick={onClick}
        >
            <section 
            className='bg-gray-100 max-w-[42rem] rounded-lg border border-black/5 overflow-hidden 
            sm:pr-8 relative sm:h-[20rem]
            sm:group-even:pl-8
            hover:bg-gray-200 hover:cursor-pointer transition
            dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
            <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
            sm:group-even:ml-[18rem]'>
                {/* title */}
                <h3 className='text-2xl font-semibold'>{title}</h3>
                {/* description */}
                <p className='mt-2 leading-relaxed text-gray-700
                dark:text-white/70'>
                    {description}
                </p>
                {/* tags */}
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto
                dark:text-white/70'>
                    {tags.map((tag, index) => (
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' 
                        key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            {/* Image */}
            <Image className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover-translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hovertranslate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40' 
            src={imageUrl} alt={title} quality={95} width={200} height={200} />
        </section>

        </motion.div>
        
    );
}
