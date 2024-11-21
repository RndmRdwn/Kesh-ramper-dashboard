'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog"
import { AppIcon } from '@/constant/icons'
import { Button } from '../shadcn/ui/button'


const PayWidget = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(!isOpen)} variant="default">Preview Widget</Button>
        </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] flex flex-col h-[600px]">
        <DialogHeader className="w-full flex flex-row gap-4 h-fit  items-end">
            <div className='border p-2 border-[#6600CC]/30 shadow-md  rounded-md'>
                <AppIcon className='h-8 w-8' />
            </div>
            <div className='grid place-content-end '>
                <DialogTitle>Keshflip Pay</DialogTitle>
                <DialogDescription>Buy and sell crypto.</DialogDescription>
            </div>
        </DialogHeader>
            <div className='h-full border'>
                Pay Widget
            </div>
        {/* Pay Widget content */}
      </DialogContent>
    </Dialog>
  )
}

export default PayWidget
