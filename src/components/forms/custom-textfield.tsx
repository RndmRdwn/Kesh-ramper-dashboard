import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import React from 'react'

type Props = {
    label: string,
    isEditable? : boolean
    value?: string | number
    placeholder?: string
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // Handler for capturing input changes
}

const CustomTextField = ({ label, value, isEditable, placeholder, type, onChange }: Props) => {
  return (
    <div className='grid gap-1'>
        <div className='text-sm font-medium'>{label}</div>
        {isEditable ?
            <Input
            type={type}
            placeholder={placeholder}
            value={value} // Bind the input value
            onChange={onChange} // Attach the onChange handler
        />
        : <Label className='text-base'>{value}</Label> }
    </div>
  )
}

export default CustomTextField
