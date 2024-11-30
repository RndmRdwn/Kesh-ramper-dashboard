import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'

type Props = {}

const Overview = (props: Props) => {
  return (
    <div className='w-full'>
      <h2 className='text-xl font-semibold pb-2'>Overview</h2>
      <Separator />
      <div className='py-3'>
        <h2 className='text-lg font-medium'>Introduction</h2>
        <p className='text-[14px] '>Give introduction to Keshflip Pay as a service.</p>
      </div>
      <div className='py-3'>
        <h2 className='text-lg font-medium'>How the documentation is organized</h2>
        <p className='text-[14px] '>Below is a quick overview of how these docs are organized to help you more quickly find what you are looking for:</p>
      </div>
      <div className='py-3'>
        <h2 className='text-lg font-medium'>Getting Help</h2>
        <p className='text-[14px] '>We are excited to have you build with us! If you are integrating, we will set up a shared slack / discord channel. This will enable our teams to easily collaborate and ensure you launch as quickly as possible.</p>
      </div>
    </div>
  )
}

export default Overview