'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    content: (string | JSX.Element)[]
    color: string
    speed: number
    delay: number
    size: string
}

const sizeClasses: { [key: string]: string } = {
    small: 'text-sm font-regular',
    medium: 'text-lg font-medium',
    large: 'text-2xl font-bold',
    xlarge: 'text-3xl lg:text-4xl font-semibold',
}

const colorClasses: { [key: string]: string } = {
    yellow: 'text-yellow-500',
    white: 'text-white',
    gray: 'text-white/60',
    black: 'text-black dark:text-white',
}

const TypingAnimation2 = ({ speed, content, delay, color, size }: Props) => {
    const characterVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.h2
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: delay }}
            className={`${sizeClasses[size] || 'text-base'} ${colorClasses[color] || 'text-black'}`}
        >
            {content.map((char, index) =>
                typeof char === 'string' ? (
                    <motion.span
                        key={`${char}-${index}`}
                        variants={characterVariant}
                        transition={{ duration: 0.3 * speed }}
                    >
                        {char}
                    </motion.span>
                ) : (
                    <motion.span
                        key={`span-${index}`}
                        variants={characterVariant}
                        transition={{ duration: 0.3 * speed }}
                        className="font-medium text-yellow-500"
                    >
                        {char}
                    </motion.span>
                )
            )}
        </motion.h2>
    )
}

export default TypingAnimation2
