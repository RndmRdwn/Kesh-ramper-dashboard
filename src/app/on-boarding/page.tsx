'use client';

import React from 'react'
import BoardingStairs from './boarding-stairs'
import { AppIcon } from '@/constant/icons'
import { Button } from '@/components/shadcn/ui/button'
import Image from 'next/image';


const OnboardingPage = () => {
  return (
    <div className='w-full h-screen max-w-2xl mx-auto  '>
      <div className='w-full h-full flex-col flex gap-2'>
       <div className=' flex  justify-center pt-12 items-center'>
          <Image src={'/assets/logo.svg'} alt='logo' width={120} height={120} />
        </div>
        <div className='w-full h-full col-span-3'>
          <BoardingStairs />
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage