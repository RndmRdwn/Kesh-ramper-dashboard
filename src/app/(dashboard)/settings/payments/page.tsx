'use client'

import { Button } from '@/components/shadcn/ui/button'
import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'
import { toast } from 'sonner'


const PaymentsPage = () => {

  const handleClick = () => {
    toast('Adding Payment Method is not available yet')
  }

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-lg font-medium">Payment Method</h3>
          <p className="text-sm text-muted-foreground">
            Set up and manage payment methods, billing options, and payment-related settings.
          </p>
        </div>
        <Separator />

      </div>
      <div className='py-4 w-full h-[680px] flex justify-center items-center'>
        
        <div className=' flex flex-col gap-2'>
          <h2 className='text-sm text-muted-foreground'>No Payment Method Available</h2>
          <Button variant='outline' className='text-sm' onClick={() => handleClick()}>
              Add Payment Method
          </Button>
        </div>
      </div>

      
    </div>
  )
}

export default PaymentsPage