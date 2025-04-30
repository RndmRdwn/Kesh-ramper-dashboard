'use client'
import React, { useEffect } from 'react'
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
import Reveal from '@/components/animations/reveal';

const Integration = () => {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const allImages = [
    {img: preimerB, name: 'Preimer Bank'},
    {img: BankETH, name: 'BankETH'},
    {img: Equity, name: 'Equity'},
    {img: preimerW, name: 'Preimer Wallet'},
    {img: Mastercard, name: 'MasterCard'},
    {img: visa, name: 'Visa'},
    {img: Jeeb, name: 'Jeeb'},
    {img: mtn, name: 'MTN'},
    {img: Portal, name: 'Portal'},
    {img: HCash, name: 'H-Cash'},
    {img: Airtel, name: 'Airtel'},
    {img: Zaad, name: 'Zaad'},
    {img: Edahab, name: 'Edahab'},
    {img: Mpesa, name: 'M-Pesa'},
    {img: Evc, name: 'EVC'},


  ]
 

  return (
    <div className=' w-full'>
      <div className='py-24 px-8 w-full flex flex-col gap-3 items-center h-full justify-center'>
       

        <main className="max-w-8xl px-5 mx-auto overflow-hidden w-full h-full ">

          <div className='grid lg:grid-cols-2  p-4 justify-center gap-12 items-center h-full'>
            <div className='w-full grid lg:grid-cols-3 grid-cols-2 gap-3  h-fit'>
                {allImages.map( (item, index) => (
                  <div key={item.name} className=' w-full h-fit'>
                    <Reveal delay={(index + 1) * 0.5}>
                      <Image src={item.img} alt="image" height={255} width={255} className='rounded-2xl'/>
                    </Reveal>
                  </div>
                ))}
            </div>

            <div className=' w-full flex flex-col gap-3 items-start justify-start'>
              <h2 className="bg-muted-foreground/15 w-fit  shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-2 px-4 rounded-full">
                <TypingAnimation color='gray' content={'Extensive Integration'} size='medium' delay={0.098} speed={2}/>
              </h2>
                <h2 className=' w-full font-semibold'>
                  <TypingAnimation color='white' content={'Integrated with Trusted Payment Platforms'} size='xlarge' delay={0.068} speed={2}/>
                </h2>
                {/* <AnimateGradientText content='Integrated with Trusted Payment Platforms' duration={0.9} size='normal' delay={1} /> */}
              <Fade>
              <p className='max-w-xl mx-auto w-full text-lg font-normal text-muted-foreground'>
                Enjoy seamless transactions with Keshflip, integrated with trusted platforms for your
                convenience and financial efficiency.
              </p>
              </Fade>
            </div>
          </div>
          {/* <div ref={container} className='w-full flex flex-col gap-8'>
            <SlideLeft data={imageData} Direction={'left'} left={"0%"} progress={scrollYProgress}/>
            <SlideLeft data={imageData2} Direction={'right'} left={"0%"} progress={scrollYProgress}/>
            <SlideLeft data={imageData3} Direction={'left'} left={"0%"} progress={scrollYProgress}/>
          </div> */}
        </main>

      </div>
    </div>
  )
}
// const SlideLeft = ({ data, Direction, progress, left }: { data: { img: string, name: string }[], Direction: string, progress: MotionValue<number>, left: string }) => {
//   const direction = Direction == 'left' ? -1 : 1;
//   const translateX = useTransform(progress, [0, 1], [150 * direction, -150 * direction])
//   return (
//     <motion.div style={{x: translateX, left: left}} className="relative gap-4 grid lg:grid-cols-5 grid-cols-2 w-full whitespace-nowrap">
//       {data.map( item => (
//         <div key={item.name} className='h-fit flex justify-center items-center  w-full'>
//           <Image src={item.img} alt="image" height={255} width={255} className='rounded-2xl'/>
//         </div>
//       ))}
//     </motion.div>
//   )
// }


export default Integration