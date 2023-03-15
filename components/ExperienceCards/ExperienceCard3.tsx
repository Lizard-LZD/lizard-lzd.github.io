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
                src='https://www.kindpng.com/picc/m/75-755692_digital-marketing-icon-black-png-download-marketing-icon.png'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Marketing Intern,</h4>
                <p className='font-bold text-2xl mt-1'>StarPro Consulting</p>
                <div className='flex space-x-2 my-2'>

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Sep 2021 - Dec 2021
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Developed marketing plans and executed marketing strategies to attract and engage potential customers.</li>
                    <li>Created compelling marketing messages, verified brand compliance, and improved content across all communication channels.</li>
                    <li>Coordinated with various departments, maximized sales, and managed successful marketing campaigns.</li>
                    <li>Negotiated contract terms and resolved disputes between clients and brands to maintain positive working relationships.</li>
                    <li>Maintained up-to-date knowledge of industry trends to provide the highest quality of service to clients.</li>
                </ul>

            </div>
        </article>
    )
}