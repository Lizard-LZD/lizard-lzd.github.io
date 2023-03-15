import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src='https://st2.depositphotos.com/1010146/6056/v/950/depositphotos_60567773-stock-illustration-software-developer-at-workplace-icon.jpg'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Web Developer</h4>
                <p className='font-bold text-2xl mt-1'>Freelance</p>
                <div className='flex space-x-2 my-2'>
                 
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Strated work... - Ended...
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg py-10'>
                    <li>Developed front-end and back-end solutions for web and mobile apps, using various technologies.</li>
                    <li>Maintained high coding standards, ensuring scalability, maintainability, and efficiency.</li>
                    <li>Worked independently as a freelance developer, managing projects and communicating with clients effectively.</li>
                    <li>Collaborated with other developers, designers, and stakeholders to develop effective solutions for clients.</li>
                    <li>Committed to continuous learning and professional development to stay current with the latest industry trends and technologies.</li>
                </ul>

            </div>
        </article>
    )
}