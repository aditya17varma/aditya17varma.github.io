"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import ProjectSection from './project-section';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.1);

  return (
    <section
      ref={ref} 
      id='projects'
      className='scroll-mt-28'
    >
      <SectionHeading>Projects</SectionHeading>

      {/* <motion.div 
        className='border border-orange-300 mb-8 p-4'
        style={{ backgroundColor: bgColorMachineLearning }}
      > */}
        {/* <h3 className='font-bold pt-3 pb-3'>Machine Learning</h3>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </motion.div>   

      <motion.div 
        className='border border-orange-300 p-4'
        style={{ backgroundColor: bgColorDistributedSystems }}
      >
        <h3 className='font-bold pt-3 pb-3'>Distributed Systems</h3>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </motion.div>     */}

        <ProjectSection title="Machine Learning" projects={projectsData} />
        <ProjectSection title="Distributed Systems" projects={projectsData} />
    </section>
  )
}