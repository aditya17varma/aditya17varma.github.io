"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { MLProjectsData, bigDataProjectsData, cloudProjectsData, fullStackProjectsData } from '@/lib/data'
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

        <ProjectSection title="Machine Learning" projects={MLProjectsData} />
        <ProjectSection title="Distributed Systems" projects={bigDataProjectsData} />
        <ProjectSection title="Full Stack" projects={fullStackProjectsData} />
        <ProjectSection title="Cloud Computing" projects={cloudProjectsData} />
    </section>
  )
}