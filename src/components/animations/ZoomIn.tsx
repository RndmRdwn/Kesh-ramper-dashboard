'use client'

import React, { useEffect } from 'react'
import {motion as m,  useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


type RevealProps = {
    delay?: number | 0.5,
    children : React.ReactNode,
    width? : "fit-content" | '100%',
}
const mainVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 75 },
}
const mainVariant2 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -75 },
}

const ZoomVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.6 },
}
export const AnimateRight = ({children, delay, width = "fit-content"} : RevealProps) => {

    const [ref, inView] = useInView()
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect( () => {
      if (inView) {
        mainControls.start("visible")
        slideControls.start("visible")
      } else {
        mainControls.start("hidden")
        slideControls.start("hidden")
      }

    }, [mainControls, inView])
  return (
    <div ref={ref} className={`relative overflow-hidden h-full ${width}`}>
        <m.div variants={mainVariant}
            initial="hidden"
            animate= {mainControls}
            transition={{ duration: 2, delay: delay}}
        >
            {children}
        </m.div>
    </div>
  )
}

export const AnimateDown = ({children, delay, width = "fit-content"} : RevealProps) => {

    const [ref, inView] = useInView()
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect( () => {
      if (inView) {
        mainControls.start("visible")
        slideControls.start("visible")
      } else {
        mainControls.start("hidden")
        slideControls.start("hidden")
      }

    }, [mainControls, inView])
  return (
    <div ref={ref} className={`relative overflow-hidden h-full ${width}`}>
        <m.div variants={mainVariant2}
            initial="hidden"
            animate= {mainControls}
            transition={{ duration: 1, delay: delay}}
        >
            {children}
        </m.div>
    </div>
  )
}

export const AnimateZoomIn = ({children, delay, width = "fit-content"} : RevealProps) => {

  const [ref, inView] = useInView()
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect( () => {
    if (inView) {
      mainControls.start("visible")
      slideControls.start("visible")
    } else {
      mainControls.start("hidden")
      slideControls.start("hidden")
    }

  }, [mainControls, inView])
return (
  <div ref={ref} className={`relative overflow-hidden h-full ${width}`}>
      <m.div variants={ZoomVariant}
          initial="hidden"
          animate= {mainControls}
          transition={{ duration: 1.5, delay: delay}}
      >
          {children}
      </m.div>
  </div>
)
}