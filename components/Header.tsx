import React from 'react'
// import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const SocialIcon = dynamic(() => import('react-social-icons').then((module) => module.SocialIcon), { ssr: false })


type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto 
        z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-col md:flex-row items-center'>
                <SocialIcon
                    url='https://github.com/Lizard-LZD'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.linkedin.com/in/ziqi-wang-62204b199/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url=''
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url=''
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <Link href='#contact'>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    get in touch
                </p>
            </motion.div>
            </Link>
        </header>
    )
}