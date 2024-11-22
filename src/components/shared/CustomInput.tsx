import React from 'react'
import { Label } from '../shadcn/ui/label'
import { Input } from '../shadcn/ui/input'

type Props = {
    label: string,
    value: string,
}

const CustomInput = ({label, value}: Props) => {
  return (
    <div className='grid  relative'>
        <Label className='absolute top-3 left-2 px-2 bg-white'>{label}</Label>
        <Input 
            className='h-10 mt-5 px-4' 
        />
        <p className='text-sm pt-1 text-muted-foreground'>{value}</p>
        
    </div>
  )
}

export default CustomInput