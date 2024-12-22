import { CustomColorSelect } from '@/components/shared/CustomColorSelect'
import React from 'react'

type Props = {
    data : {
        bg_color : string
        button_color : string
        text_color : string
        button_text_color : string
        primary_color : string
        border_color : string
    },
    setSelectedPrimary: (val: string) => void
    handleChange: (name: string, value: string) => void
}

const CustomTools = ({data, handleChange, setSelectedPrimary}: Props) => {

    const handleSelectColor = (value : string) => {
        handleChange('primary_color', value)
        setSelectedPrimary(value)
    }
  return (
    <div>
         <div className="py-2 grid  gap-4">
            
            <CustomColorSelect
                value={data.primary_color}
                label="Brand Color"
                isEditable={true}
                placeholder={'Select Primary color'}
                onChange={(value) => handleSelectColor(value)}
            />  
            <CustomColorSelect
                value={data.bg_color}
                label="Accent Color"
                isEditable={true}
                placeholder={'Select background color'}
                onChange={(value) => handleChange('bg_color', value)}
            />   
        </div>
    </div>
  )
}

export default CustomTools