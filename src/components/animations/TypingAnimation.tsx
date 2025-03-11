'use client'

import { motion } from 'framer-motion'
import splitStringRgx from '../../lib/SplitString'
import React from 'react'

type Props = {
    content: string
    color: string
    speed: number | 1
    delay: number | 1
    size: string,
}

const sizeClasses2: { [key: string]: string } = {
    small: ' text-sm font-regular',
    smallX: 'lg:text-lg text-sm font-regular',
    medium: 'lg:text-sm text-base font-medium',
    mediumBold: 'lg:text-lg text-base font-semibold',
    normalLight: 'text-base text-base font-normal',
    normal: 'text-lg text-base lg:font-bold font-bold',
    semi: 'lg:text-2xl md:text-xl text-lg font-semibold',
    large: 'lg:text-3xl text-3xl font-bold',
    large2: 'lg:text-4xl md:tex-3xl text-2xl font-semibold',
    xlarge: 'lg:text-5xl md:tex-4xl text-3xl font-semibold',
    xxxlarge: 'lg:text-5xl md:text-4xl text-3xl font-semibold',
    semixxlarge: 'font-semibold lg:text-5xl md:text-5xl text-4xl',
    xxlarge: 'text-4xl font-bold',
    Big: 'lg:text-6xl md:text-5xl text-5xl font-bold',
};

const colorClasses: { [key: string]: string } = {
    yellow: 'text-yellow-500',
    green: 'text-emerald-600',
    primary: 'text-[#033F63]',
    white: 'text-white',
    gray: 'text-white/60',
    lightgray: 'text-white/40',
    black: 'text-black dark:text-white',
};

const TypingAnimation = ({ speed, content, delay, color,  size}: Props) => {

    const text = splitStringRgx(content)
    const characterVariant = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    } 

  return (
    <div>
    <motion.div className=''>
        <motion.h2
            initial='hidden'
            whileInView='visible'
            transition={{ staggerChildren: delay }}
            className={`${sizeClasses2[size] || 'text-base font-regular'} ${colorClasses[color] || 'dark:text-white   text-black'}`}
        >
            {text.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className='leading-tight'
                    variants={characterVariant} 
                    transition={{ duration: 0.3 * speed}}
                >
                    {char}
                </motion.span>
            ))}
        </motion.h2>
    </motion.div>
</div>
  )
}

export default TypingAnimation