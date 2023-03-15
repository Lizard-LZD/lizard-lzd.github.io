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
                src='https://www.shutterstock.com/image-vector/news-anchor-black-icon-symbol-260nw-1435118444.jpg'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Journalism Intern</h4>
                <p className='font-bold text-2xl mt-1'>The Conflux Rivista Ltd</p>
                <div className='flex space-x-2 my-2'>

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Dec 2021 - Feb 2022
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Developed and pursued stories independently.</li>
                    <li>Operated and promoted a mobile media software platform.</li>
                    <li>Established relationships with sources and provided creative direction to staff members as a journalist.</li>
                    <li>Monitored media outlets and sources daily to maintain an understanding of current events and breaking news.</li>
                    <li>Utilized digital tools and platforms to produce professional content and optimized work content through data analysis.</li>
                </ul>

            </div>
        </article>
    )
}