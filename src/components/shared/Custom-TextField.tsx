import React from 'react'
import { Label } from '../shadcn/ui/label'
import { Input } from '../shadcn/ui/input'

type Props = {
    placeholder: string,
    label: string,
    value: string,
    onChange?: (value: string) => void // Handler for capturing input changes
  
}

const CustomTextField = ({placeholder, label, value, onChange }: Props) => {
  return (
    <div className='grid gap-1 relative'>
        <Label className=''>{label}</Label>
        <Input placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}

export default CustomTextField