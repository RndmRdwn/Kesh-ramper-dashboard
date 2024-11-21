import { Button } from '@/components/shadcn/ui/button'
import React from 'react'
import PersonalInfo from './personal-info'
import CompanyInfo from './company-info'
import { Separator } from '@/components/shadcn/ui/separator'


const BoardingStairs = () => {


  return (
    <div className=' p-2 w-full h-full relative flex flex-col gap-8'>
        <div className='py-8'>
            <h2 className='text-xl font-medium'>Welcome to Keshflip </h2>
            <h2 className='text-base text-muted-foreground'>Let’s get you started with a secure and personalized experience. </h2>
        </div>
        <div className=' w-full h-full '>
            <div className=' grid '>
                <PersonalInfo />
                <Separator className='my-8 bg-primary/5'/>
                <CompanyInfo />
            </div>
        </div>
        <div className=' w-full h-full  pb-24 flex '>
            <Button size='lg' className='px-12'>Continue</Button>
        </div>
    </div>
  )
}


export default BoardingStairs