'use client'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import BankETH from '../../public/assets/clients/new/bank-eth.svg'
import preimerB from '../../public/assets/clients/new/preimer-bank.svg'
import Equity from '../../public/assets/clients/new/equity.svg'
import HCash from '../../public/assets/clients/new/hcash.svg'
import Airtel from '../../public/assets/clients/new/airtel.svg'
import mtn from '../../public/assets/clients/new/mtn.svg'
import Mpesa from '../../public/assets/clients/new/mpesa.svg'
import Evc from '../../public/assets/clients/new/evc-plus.svg'
import visa from '../../public/assets/clients/new/visa.svg'
import Mastercard from '../../public/assets/clients/new/mstrcard.svg'
import Portal from '../../public/assets/clients/new/portal.svg'
import preimerW from '../../public/assets/clients/new/preimer-wallet.svg'
import Zaad from '../../public/assets/clients/new/zaad.svg'
import Edahab from '../../public/assets/clients/new/edahab.svg'
import Jeeb from '../../public/assets/clients/new/jeeb.svg'

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

  const imageData = [
    {img: Jeeb, name: 'Jeeb'},
    {img: Mastercard, name: 'MasterCard'},
    {img: visa, name: 'Visa'},
    {img: mtn, name: 'MTN'},
    {img: Portal, name: 'Portal'},
  ]

  const imageData2 = [
    {img: HCash, name: 'H-Cash'},
    {img: Equity, name: 'Equity'},
    {img: Airtel, name: 'Airtel'},
    {img: BankETH, name: 'BankETH'},
    {img: preimerW, name: 'Preimer Wallet'},
  ]
  
  const imageData3 = [
    {img: Zaad, name: 'Zaad'},
    {img: Edahab, name: 'Edahab'},
    {img: preimerB, name: 'Preimer Bank'},
    {img: Mpesa, name: 'M-Pesa'},
    {img: Evc, name: 'EVC'},
  ]

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
            <SlideLeft data={imageData} Direction={'left'} left={"0%"} progress={scrollYProgress}/>
            <SlideLeft data={imageData2} Direction={'right'} left={"0%"} progress={scrollYProgress}/>
            <SlideLeft data={imageData3} Direction={'left'} left={"0%"} progress={scrollYProgress}/>
            {/* <SlideRight src={Picture2} direction={'right'} left={"0%"} progress={scrollYProgress}/> */}
            {/* <SlideLeft2 src={Picture1} direction={'left'} left={"0%"} progress={scrollYProgress}/> */}
            {/* <Slide src={Picture3} direction={'left'}  left={"0%"} progress={scrollYProgress}/> */}
          </div>
          <div className='h-[10vh]' />
        </main>

      </div>
    </div>
  )
}
const SlideLeft = ({ data, Direction, progress, left }: { data: { img: string, name: string }[], Direction: string, progress: MotionValue<number>, left: string }) => {
  const direction = Direction == 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: left}} className="relative gap-0 grid lg:grid-cols-5 grid-cols-3 w-full whitespace-nowrap">
      {data.map( item => (
        <div key={item.name} className='h-fit flex justify-center items-center  w-full'>
          <Image src={item.img} alt="image" height={255} width={255} className='rounded-2xl'/>
        </div>
      ))}
    </motion.div>
  )
}


export default Integration