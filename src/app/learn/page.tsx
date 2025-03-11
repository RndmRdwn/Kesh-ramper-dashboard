import Reveal4mTop from '@/components/animations/reveal4mTop'
import TypingAnimation from '@/components/animations/TypingAnimation'
import Header from '@/sections/header'
import React from 'react'

const LearnPage = () => {
  return (
    <div className='p-5 text-white bg-[#6600DC] h-screen w-full text-xl'>
        <Reveal4mTop>
            <Header isTry={false} />
        </Reveal4mTop>
        <div className='text-2xl py-24'>
            <TypingAnimation color='white'  content={'Learn Page'} size='xxxlarge' delay={0.058} speed={1.5}/>
            <TypingAnimation color='white'  content={'Coming Soon'} size='normalLight' delay={0.158} speed={1.5}/>
        </div>
    </div>
  )
}

export default LearnPage