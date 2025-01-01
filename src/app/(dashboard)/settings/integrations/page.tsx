'use client'

import { Button } from '@/components/shadcn/ui/button'
import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'
import { toast } from 'sonner'


const IntegrationsPage = () => {

  const handleClick = () => {
    toast('Setting up Integration is not available yet ')
  }
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Integrations</h3>
        <p className="text-sm text-muted-foreground">
          Manage third-party integrations, APIs, and external services connected to your platform.
        </p>
      </div>
      <Separator />

      <div className='py-4 w-full h-[680px] flex justify-center items-center'>
        
        <div className=' flex flex-col gap-2'>
          <h2 className='text-sm text-muted-foreground'>No Integration connected to this platform. </h2>
          <Button variant='outline' className='text-sm' onClick={() => handleClick()}>
              Set up integrations
          </Button>
        </div>
      </div>
    </div>
  )
}

export default IntegrationsPage