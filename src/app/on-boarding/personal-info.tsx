import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import { Textarea } from '@/components/shadcn/ui/textarea'
import React from 'react'

// type Props = {}

const PersonalInfo = () => {
  return (
      <div className='flex flex-col gap-4'>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="firstName">Entity Name <span className='text-red-500'>*</span> </Label>
            <Input id="firstName" type="text" placeholder="Faraax" className='rounded-lg  py-6 border-primary/50 text-sm' required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Project Name<span className='text-red-500'>*</span> </Label>
            <Input id="lastName" type="text" placeholder="Moos" className='rounded-lg  py-6 border-primary/50 text-sm' required />
          </div>
        </div>

        <div className='grid gap-2'>
          <Label htmlFor="desc">Project Description<span className='text-red-500'>*</span> </Label>
          <Textarea placeholder='Write a few sentences about your project' className=' rounded-lg border-primary/50 pt-3 pb-8'/>
        </div>

        
        <div className="grid gap-2">
            <Label htmlFor="web">Company Website<span className='text-red-500'>*</span> </Label>
            <Input id="web" type="text" placeholder="www.company.com" className='rounded-lg  py-6 border-primary/50 text-sm' required />
          </div>
      </div>
  )
}

export default PersonalInfo