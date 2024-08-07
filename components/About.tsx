import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Pic from '../public/Ziqii.jpg'
type Props = {}
// '-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
export default function About({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            transition={{
                duration: 1.5
            }}
            whileInView={{
                opacity: 1
            }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: false }}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[480px]'
            >
                <Image
                    className='flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[480px]'
                    width={500}
                    height={500}
                    src={Pic}
                    alt='' />
            </motion.div>

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a {' '}
                    <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
                    background
                </h4>
                <p className='text-xl'>
                    Hi there my name is Ziqi, a passionate and motivated individual with a focus on coding.  
                    Python, JavaScript, React, Node.js, and Next.js. 
                   
                </p>
            </div>
        </motion.div>

    )
}
