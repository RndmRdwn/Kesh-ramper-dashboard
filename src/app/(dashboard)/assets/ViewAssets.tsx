'use client'

import { Button } from '@/components/shadcn/ui/button'
import React from 'react'
import { toast } from 'sonner'

const ViewAssets = () => {

  const handleClick = () => {
    toast('Adding Assets is not available yet.')
  }


  return (
    <div>
      <div className='w-full flex-col gap-3  lg:h-[800px] h-[700px] flex justify-center items-center'>
        <h2 className='text-sm text-muted-foreground'>There are no assets available now</h2>
        <Button variant='outline' onClick={() => handleClick()} 
          className='text-sm px-8  border-primary/20 '>
          Add New Assets
        </Button>
      </div>
    </div>
  )
}

export default ViewAssets