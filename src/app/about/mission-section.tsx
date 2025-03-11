import Reveal from '@/components/animations/reveal';
import TypingAnimation from '@/components/animations/TypingAnimation';
import React from 'react'


const MissionSection = () => {

    const head = 'Guiding Our Purpose and Shaping Our Future';
    const mission = 'Our mission is to build a secure, user-friendly platform that makes cryptocurrency accessible to everyone. We simplify the process of buying, selling, and managing digital assets, empowering users to participate confidently in the digital economy. Through advanced technology and strong security, we aim to support both new and experienced traders on their financial journey'
    const vision = 'Our vision is to bridge the gap between traditional finance and cryptocurrency, leading the way toward a future where digital assets are a central part of everyday transactions. We strive to create a more inclusive global financial system, where anyone, anywhere can take control of their financial future through innovation and trust.'

  return (
    <div className='w-full h-full py-24 p-5'>
        <div className='w-full  rounded-[16px] bg-black/10 lg:p-16 p-8 pt-12  flex justify-center items-center flex-col my-8'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h2 className="bg-white/15 w-fit shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-2 px-4 rounded-full">
                    <TypingAnimation color='white' content={'Our Mission & Vision'} size='medium' delay={0.098} speed={2}/>
                </h2>
                <div className='max-w-2xl mx-auto w-full flex justify-center items-center text-center'>
                    <TypingAnimation color='white' content={head} size='large2' delay={0.068} speed={2}/>
                </div>
            </div>
            <div className='w-full bg-gradient-to-l to-muted-foreground/5 via-muted/10 from-muted-foreground/5 p-[1px] mt-8' />
            <div className='w-full py-8 lg:px-16 grid lg:grid-cols-2 lg:gap-2 gap-7'>
                
                <div className='flex gap-6 flex-col lg:pr-8'>
                    <h2 className='text-2xl font-semibold'></h2>
                    <TypingAnimation color='white' content={'🎯 Mission'} size='semi' delay={0.4} speed={2}/>
                    <Reveal delay={3}>
                        <h2 className='leading-loose '>{mission}</h2>
                    </Reveal>

                </div>
                <div className='flex gap-6 flex-col lg:border-l lg:border-t-0 md:border-t border-muted-foreground/70 lg:pt-0 pt-6 lg:pl-8'>
                    <TypingAnimation color='white' content={'🔍 Vision'} size='semi' delay={0.4} speed={2}/>
                    <Reveal delay={4}>
                        <h2 className='leading-loose'>{vision}</h2>
                    </Reveal>
                </div>
            </div>

        </div>
    </div>
  )
}

export default MissionSection