import { Label } from '@/components/shadcn/ui/label'
import { Textarea } from '@/components/shadcn/ui/textarea'
import React from 'react'

type Props = {
    label: string,
    isEditable? : boolean
    value?: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void; // Allow both input and textarea events
  
}

const CustomTextArea = ({ label, value, isEditable, placeholder, onChange }: Props) => {
  return (
    <div className='grid gap-1'>
        <div className='text-sm font-medium'>{label}</div>
        {isEditable ?
            <Textarea
                placeholder={placeholder}
                value={value} // Bind the input value
                onChange={onChange} // Attach the onChange handler
            />
        : <Label className='text-base'>{value}</Label> }
    </div>
  )
}

export default CustomTextArea