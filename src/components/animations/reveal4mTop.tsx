'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type Props = {
    children: React.ReactNode,
    width?: "fit-content" | "100%";
    delay?: number,
}

const Reveal4mTop = ({ children, width, delay }: Props) => {
    const target = useRef(null)
    const controls = useAnimation()
    const isInView = useInView(target) // Ensures animation only plays once

    useEffect(() => {
        if (isInView) controls.start('visible')
        else controls.start('hidden')
    }, [isInView, controls]) 

    return (
        <div ref={target} style={{ position: "relative", width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, translateY: -50 }, // Start below
                    visible: { opacity: 1, translateY: 0 } // Move up
                }}
                initial="hidden"
                animate={controls}
                transition={{ delay: delay * 0.3, duration: 0.4, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal4mTop
