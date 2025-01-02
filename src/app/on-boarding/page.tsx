'use client';

import React from 'react'
import BoardingStairs from './boarding-stairs'
import Image from 'next/image';


const OnboardingPage = () => {
  return (
    <div className='w-full h-screen p-8 bg-[#6600CC] '>
      <div className='w-full h-full rounded-xl    flex-col flex gap-2 bg-white'>
       <div className=' max-w-2xl mx-auto pt-20'>
        <div className=' flex  justify-center  items-center'>
            <Image src={'/assets/logo.svg'} alt='logo' width={170} height={170} />
          </div>
          <div className='w-full h-full  '>
            <BoardingStairs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage