'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import Picture1 from '../../public/assets/sample/image01.svg'
import Picture2 from '../../public/assets/sample/image02.svg'

import fireblocks from '../../public/assets/clients/fireblocks.svg'
import hcash from '../../public/assets/clients/h-cash.svg'
import mastercard from '../../public/assets/clients/mastercard.svg'
import techtricks from '../../public/assets/clients/techtricks.svg'
import marketpro from '../../public/assets/clients/marketpro.svg'
import mtn from '../../public/assets/clients/mtn.png'
import mpesa from '../../public/assets/clients/mpesa.svg'
import codify from '../../public/assets/clients/codify.svg'
import preimer from '../../public/assets/clients/preimer.svg'

import Lenis from 'lenis';
import Image from 'next/image';
import Fade from '@/components/animations/fade';
import TypingAnimation from '@/components/animations/TypingAnimation';

const Integration = () => {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className=' w-full'>
      <div className='py-12 w-full flex flex-col gap-3 items-center justify-center'>
        <div className='max-w-7xl mx-auto w-full flex flex-col gap-8 items-center justify-center'>
          <h2 className="bg-muted-foreground/15 w-fit  shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-2 px-4 rounded-full">
            <TypingAnimation color='gray' content={'Extensive Integration'} size='medium' delay={0.098} speed={2}/>
          </h2>
            <h2 className='max-w-4xl mx-auto w-full text-5xl text-center font-semibold'>
              <TypingAnimation color='white' content={'Integrated with Trusted Payment Platforms'} size='xlarge' delay={0.068} speed={2}/>
            </h2>
            {/* <AnimateGradientText content='Integrated with Trusted Payment Platforms' duration={0.9} size='normal' delay={1} /> */}
          <Fade>
          <p className='max-w-3xl mx-auto w-full text-lg text-center font-normal text-muted-foreground'>
            Enjoy seamless transactions with Keshflip, integrated with trusted platforms for your
            convenience and financial efficiency.
          </p>
          </Fade>
        </div>

        <main className="max-w-8xl px-5 mx-auto overflow-hidden w-full">
          <div className='h-[10vh] overflow-hidden w-full'/>
          <div ref={container} className='w-full flex flex-col gap-8'>
            <SlideLeft src={Picture1} direction={'left'} left={"0%"} progress={scrollYProgress}/>
            <SlideRight src={Picture2} direction={'right'} left={"0%"} progress={scrollYProgress}/>
            {/* <Slide src={Picture3} direction={'left'}  left={"0%"} progress={scrollYProgress}/> */}
          </div>
          <div className='h-[10vh]' />
        </main>

      </div>
    </div>
  )
}
const SlideLeft = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative gap-8 grid lg:grid-cols-6 grid-cols-3 w-full whitespace-nowrap">
      <div className='h-fit flex justify-center items-center  rounded-2xl w-full'>
        <Image src={codify} alt="image" height={255} width={255}/>
      </div>
      <div className='h-full bg-[#E5EEF2] flex justify-center items-center  rounded-2xl w-full'>
        <Image src={techtricks} alt="image" height={300} width={300}/>
      </div>
      <div className='h-full bg-[#F6B331] flex justify-center items-center  rounded-2xl w-full'>
        <Image src={hcash} alt="image" className='rounded-3xl' height={300} width={300}/>
      </div>
      <div className='h-full flex justify-center bg-white items-center rounded-2xl w-full'>
        <Image src={fireblocks} alt="image" height={300} width={300}/>
      </div>
      <div className='h-full flex justify-center bg-[#1B4474] items-center  rounded-2xl w-full'>
        <Image src={preimer} alt="image" className='rounded-3xl' height={370} width={370}/>
      </div>
      <div className='h-full flex justify-center bg-white items-center rounded-2xl w-full'>
        <Image src={mastercard} alt="image" height={300} width={300}/>
      </div>
    </motion.div>
  )
}
const SlideRight = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative gap-8 grid lg:grid-cols-6 grid-cols-3 w-full whitespace-nowrap">
      <div className='h-fit flex justify-center items-center  rounded-2xl w-full'>
        <Image src={mpesa} alt="image" height={255} width={255}/>
      </div>
      <div className='h-full bg-[#FFCB04] flex justify-center items-center  rounded-2xl w-full'>
        <Image src={mtn} alt="image" className='rounded-3xl' height={300} width={300}/>
      </div>
      <div className='h-full flex justify-center bg-white items-center rounded-2xl w-full'>
        <Image src={fireblocks} alt="image" height={300} width={300}/>
      </div>
      <div className='h-full flex justify-center bg-[#1B4474] items-center  rounded-2xl w-full'>
        <Image src={preimer} alt="image" className='rounded-3xl' height={370} width={370}/>
      </div>
      <div className='h-full bg-[#EFF7E0] flex justify-center items-center  rounded-2xl w-full'>
        <Image src={codify} alt="image" className='rounded-3xl' height={300} width={300}/>
      </div>
      <div className='h-full flex justify-center bg-[#FFF6E9] items-center rounded-2xl w-full'>
        <Image src={marketpro} alt="image" height={300} width={300}/>
      </div>
    </motion.div>
  )
}

// const Phrase = ({src}) => {

//   return (
//     <div className={'px-5 flex gap-5 items-center'}>
//       <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
//         <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
//       </span>
//     </div>
//   )
// }

export default Integration