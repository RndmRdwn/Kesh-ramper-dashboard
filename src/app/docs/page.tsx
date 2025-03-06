'use client'


import { Button } from '@/components/shadcn/ui/button'
import React from 'react'


const DocsPage = () => {


    const handleGoBack = () => {
        window.location.href = '/';
    }

  return (
    <div className='h-screen w-full   '>
        <div className='h-full py-6 w-full    max-w-7xl mx-auto '>
        
            <div className='flex flex-col gap-6 justify-center items-center w-full h-full'>
            <h2 className='text-2xl font-medium'>Coming Soon</h2>
                    <Button onClick={() => handleGoBack()} className='w-44' >
                        <a href={'/'}>
                                    Go Back
                        </a>
                    </Button>
            </div>
        </div>
    </div>
  )
}

export default DocsPage