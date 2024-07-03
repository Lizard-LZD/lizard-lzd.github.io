import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard1 from './ExperienceCards/ExperienceCard1'
import ExperienceCard2 from './ExperienceCards/ExperienceCard2'
import ExperienceCard3 from './ExperienceCards/ExperienceCard3'
import ExperienceCard4 from './ExperienceCards/ExperienceCard4'

type Props = {}

export default function Experience({ }: Props) {
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
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ExperienceCard1 />
                <ExperienceCard1 />
                <ExperienceCard1 />
                <ExperienceCard1 />
                {/* <ExperienceCard2 />
                <ExperienceCard3 />
                <ExperienceCard4 /> */}
            </div>
        </motion.div>
    )
}