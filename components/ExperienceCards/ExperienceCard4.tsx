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
                src='https://png.pngtree.com/png-vector/20191119/ourmid/pngtree-teacher-vector-illustration-with-black-and-white-design-teacher-icon-png-image_1996068.jpg'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>English Teaching Assistant</h4>
                <p className='font-bold text-2xl mt-1'>Education First</p>
                <div className='flex space-x-2 my-2'>

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Jul 2017 - Sep 2018
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Established and maintained student files, ensuring accurate and up-to-date records.</li>
                    <li>Instructed students on class operations and effectively resolved student problems in a timely manner.</li>
                    <li>Recorded students class presentations and communicated with instructors on students learning progress and daily situations.</li>
                    <li>Evaluated students class performance, regularly followed up with them and communicated to encourage their completion of studies and understanding of learning goals.</li>
                    <li>Collaborated with the teaching team and teachers to achieve education and teaching objectives.</li>
                </ul>

            </div>
        </article>
    )
}