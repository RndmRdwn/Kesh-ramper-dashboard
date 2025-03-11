import Image from 'next/image'
import React from 'react'
import KeshMap  from '../../../public/assets/features/kesh-map.svg' 
import TypingAnimation from '@/components/animations/TypingAnimation'
import Reveal from '@/components/animations/reveal'
import { Button } from '@/components/shadcn/ui/button'
import Fade from '@/components/animations/fade'


const AboutInfo = () => {
  
  const head = `Shaping the Future of Digital Finance`
  const desc = `Keshflip is a digital exchange platform that offers secure and seamless currency exchange across East Africa. We provide a reliable and user-friendly experience for both individuals and businesses, making it easy to exchange local and international currencies.`

  return (
        <div className='w-full grid lg:grid-cols-2 gap-4 h-full lg:p-0 p-5'>
            <div className='h-full flex  items-center w-full '>
              <div className='flex flex-col gap-6 items-start justify-center lg:pt-0 pt-24 pb-12'>
                <Reveal >
                  <h2 className="bg-white/15 w-fit shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-2 px-4 rounded-full">
                      <TypingAnimation color='white' content={'🌍 Building Trust in Finance'} size='medium' delay={0.098} speed={2}/>
                  </h2>
                </Reveal>
                <TypingAnimation color='white' content={head} size='xlarge' delay={0.068} speed={2}/>
                <Reveal delay={2}>
                  <h2 className='leading-loose lg:pr-24'>{desc}</h2>
                </Reveal>
                <Reveal delay={4}>
                  <Button className='bg-white font-semibold text-primary p-6'>Explore Our Journey</Button>
                </Reveal>
              </div>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
              <Fade>
                <Image src={KeshMap}  alt='map' width={900} height={900}/>
              </Fade>
            </div>
        </div>
  )
}

export default AboutInfo