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
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcx7N07g01bi4_y0yQV2syFWOboPd4KzFPA&usqp=CAU'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Boss</h4>
                <p className='font-bold text-2xl mt-1'>Empire</p>
                <div className='flex space-x-2 my-2'>
                    <Image
                        className='h-10 w-10 rounded-full'
                        src=''
                        alt=''
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Strated work... - Ended...
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>11111</li>
                    <li>22222</li>
                    <li>33333</li>
                    <li>44444</li>
                    <li>55555</li>
                </ul>

            </div>
        </article>
    )
}