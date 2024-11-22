'use client';

import React from 'react'
import BoardingStairs from './boarding-stairs'
import { AppIcon } from '@/constant/icons'
import { Button } from '@/components/shadcn/ui/button'


const OnboardingPage = () => {
  return (
    <div className='w-full max-h-screen max-w-7xl mx-auto  '>
       <div className=' flex py-8 h-full justify-between items-center'>
          <div className=' flex gap-3 items-end'>
                <AppIcon className='w-10 h-10'/>
                <h2 className='font-medium text-xl'>Keshflip</h2>
            </div>
            <div className=''>
              <Button size='lg'>Skip onboarding</Button>
            </div>
        </div>
      <div className='w-full h-full border-2 flex-col flex gap-2'>
        <div className='w-full border-2 col-span-3'>
          <BoardingStairs />
        </div>
        <div className='w-full border p-8 rounded-xl     gap-3   '>
          <div className='w-full border-2 col-span-5'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage