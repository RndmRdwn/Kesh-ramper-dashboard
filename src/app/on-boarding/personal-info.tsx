import { Button } from '@/components/shadcn/ui/button'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import { Textarea } from '@/components/shadcn/ui/textarea'
import React from 'react'

type Props = {
  handleNext : () => void
}

const PersonalInfo = ({handleNext} : Props) => {
  return (
      <div className='flex flex-col gap-8'>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-6 gap-6 py-4">
          <div className="grid gap-2">
            <Label className='font-semibold' htmlFor="firstName">Entity Name <span className='text-red-500'>*</span> </Label>
            <Input id="firstName" type="text" className='rounded-lg  py-6 border-primary/50 text-sm' required />
          </div>
          <div className="grid gap-2">
            <Label className='font-semibold' htmlFor="lastName">Project Name<span className='text-red-500'>*</span> </Label>
            <Input id="lastName" type="text" className='rounded-lg  py-6 border-primary/50 text-sm' required />
          </div>
        </div>

        <div className='grid gap-2'>
          <Label className='font-semibold' htmlFor="desc">Project Description<span className='text-red-500'>*</span> </Label>
          <Textarea className=' rounded-lg border-primary/50 pt-3 pb-8'/>
          <h2 className='text-xs text-muted-foreground'>Write a few sentences about your project</h2>
        </div>

        
        <div className="grid gap-2">
            <Label className='font-semibold' htmlFor="web">Company Website<span className='text-red-500'>*</span> </Label>
            <Input id="web" type="text" placeholder="www.example.com" className='rounded-lg  py-6 border-primary/50 text-sm' required />
        </div>
        <div className='w-full pt-12'>
          <Button onClick={handleNext} size='lg' className='px-12 py-6 bg-[#6600CC]  w-full'>Continue</Button>
        </div>
      </div>
  )
}

export default PersonalInfo