import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectType } from '@/lib/data'
import { FaGithubSquare } from 'react-icons/fa'

type ProjectPopupProps = {
    project: ProjectType | null;
    onClose: () => void;
};

const convertNewlinesToBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
}

export default function ProjectPopup({
    project,
    onClose,
}: ProjectPopupProps) {
    if (!project) return null;

    return (
        <motion.div
        className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center
        z-50'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        >
            <div
            className='bg-white rounded-lg p-6 max-w-3xl w-full relative
            project-popup-content
            dark:bg-gray-800'
            onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                className='absolute top-4 right-4 text-gray-700
                hover:text-orange-400
                dark:text-gray-300 dark:hover:text-orange-400'
                onClick={onClose}
                >
                    Close
                </button>
                {/* Title */}
                <h3 className='text-2xl font-semibold'>{project.title}</h3>
                {/* GitHub Button */}
                {project.githubUrl && (
                    <a className='mt-4 bg-gray-100 p-4 inline-flex text-gray-700 items-center gap-2 text-[1.35rem] rounded-full
                    active:scale-105 transition cursor-pointer border borderBlack
                    hover:text-gray-950 hover:border-orange-400
                    dark:bg-white/10 dark:text-white/60 dark:hover:text-white'
                    href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                  <FaGithubSquare />
                  <span className='text-xl'>GitHub</span>
                </a>
                )}
                {/* Sponsor Button */}
                {project.sponsor && (
                    <a className='mt-4 bg-gray-100 p-4 inline-flex text-gray-700 items-center gap-2 text-[1.35rem] rounded-full
                    active:scale-105 transition cursor-pointer border borderBlack
                    hover:text-gray-950 hover:border-orange-400
                    dark:bg-white/10 dark:text-white/60 dark:hover:text-white'
                    href={project.sponsorUrl} target='_blank' rel='noopener noreferrer'>
                    <span className='text-xl'>Sponsored By {project.sponsor}</span>
                    </a>
                )}
                {project.sponsor && (
                    <p
                    className='mt-2 text-gray-700 text-left text-sm
                    dark:text-gray-300'
                    >
                        (Propietary code cannot be shared publicly)
                    </p>
                )}
                {/* Horizontal Ruler */}
                <hr className='mt-4 border-t border-gray-300 dark:border-gray-700' />
                {/* Description */}
                <h4 className='mt-4 text-xl font-semibold text-center'>Details</h4>
                <p
                className='mt-2 text-gray-700 text-center
                dark:text-gray-300'
                >
                    {convertNewlinesToBreaks(project.detailedDescription || '')}
                </p>
                {/* Images if additional */}
                {project.additionalImages && (
                    <>
                        <h4 className='mt-4 text-xl font-semibold text-center'>Images</h4>
                        <div
                        className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'
                        >
                            {project.additionalImages.map((image, index) => (
                                <Image 
                                key={index}
                                src={image}
                                alt={`${project.title} image ${index + 1}`}
                                width={400}
                                height={300}
                                className='rounded-lg'
                                />
                            ))}
                        </div>
                    </>
                )}
                {/* Video if available */}
                {project.videoUrl && (
                    <>
                        <h4 className='mt-4 text-xl font-semibold text-center'>Demo</h4>
                        <div className='mt-4'>
                            <video controls className='w-full rounded-lg'>
                                <source src={project.videoUrl} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </>
                )}
            </div>

        </motion.div>
    )

}
