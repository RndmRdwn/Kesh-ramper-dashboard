import Reveal4mTop from '@/components/animations/reveal4mTop'
import Header from '@/sections/header'
import React from 'react'


const FeaturesPage = () => {
  return (
    <div className='p-5 text-white bg-[#6600DC] h-screen w-full text-xl'>
        <Reveal4mTop>
            <Header isTry={false} />
        </Reveal4mTop>
        <div className='text-2xl py-24'>
            Features Page
        </div>
    </div>
  )
}

export default FeaturesPage