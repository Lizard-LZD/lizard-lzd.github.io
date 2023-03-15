import { motion } from 'framer-motion'
import React from 'react'
import Skill from './skills/Skill'
import Skill2 from './skills/Skill2'
import Skill3 from './skills/Skill3'
import Skill4 from './skills/Skill4'
import Skill5 from './skills/Skill5'
import Skill6 from './skills/Skill6'
import Skill7 from './skills/Skill7'
import Skill8 from './skills/Skill8'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

    <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for currenct profieciency
    </h3>

    <div className='grid grid-cols-4 gap-5'>
        <Skill directionLeft={true}/>
        <Skill2 directionLeft={true}/>
        <Skill3 directionLeft={true}/>
        <Skill4 directionLeft={true}/>
        <Skill5 />
        <Skill6 />
        <Skill7 />
        <Skill8 />
    </div>
    </motion.div>
  )
}
