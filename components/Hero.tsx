import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from '@/components/BackgroundCircles'
import Pic from '../public/Ziqi.jpg'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi this is Ziqi', 'A guy who loves coding', '<Lifelong learner... />'],
        loop: true,
        delaySpeed: 2000,

    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                width={500}
                height={500}
                src={Pic}
                alt='' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Developer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='yellow' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='btn'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='btn'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='btn'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='btn'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}