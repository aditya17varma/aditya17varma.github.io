import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Project from './project';
import { projectsData } from '@/lib/data'

type ProjectSectionProps = {
  title: string;
  projects: typeof projectsData;
};

export default function ProjectSection({ title, projects}: ProjectSectionProps) {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(scrollYProgress, [0, 1], ['#f9fafb', '#e2e8f0']);

  return (
    <motion.div 
      className='rounded-lg mb-8 p-4
      bg-gray-100 bg-opacity-70
      dark:bg-gray-700 dark:bg-opacity-10'
      // style={{ backgroundColor: bgColor }}
    >
      <h3 className='font-bold pt-3 pb-3'>{title}</h3>
      {
        projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))
      }
    </motion.div>
  );
};