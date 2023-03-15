import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Project({ }: Props) {
    return (
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
                initial={{
                    y: -300,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: false }}
                width={600}
                src='https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&width=1200'
                alt=''
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7Ab0A]/50'>
                        Project 2:
                    </span>
                    Draggable TodoList
                </h4>
                <p className='text-lg text-center md:text-left'>
                    <Link href='https://lizard-lzd.github.io/DraggableTodoList/'>
                        Click here to view
                    </Link>
                </p>
            </div>
        </div>
    )
}