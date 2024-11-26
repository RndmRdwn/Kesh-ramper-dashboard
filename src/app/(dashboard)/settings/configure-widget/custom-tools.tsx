import { CustomSelect } from '@/components/shared/CustomSelect'
import { DefaultSelectType } from "@/constant/types/common"
import React from 'react'

type Props = {
    data : {
        bg_color : string
        button_color : string
        text_color : string
        button_text_color : string
        focus_outline_color : string
        border_color : string
    },
    sample : DefaultSelectType[]
    handleChange: (name: string, value: string) => void
}

const CustomTools = ({data, sample, handleChange}: Props) => {
  return (
    <div>
         <div className="py-2 grid grid-cols-2 gap-2">
            
            <CustomSelect
                value={data.border_color}
                data={sample}
                label="Primary Color"
                isEditable={true}
                placeholder={'Select Primary color'}
                onChange={(value) => handleChange('border_color', value)}
            />  
            <CustomSelect
                value={data.bg_color}
                data={sample}
                label="Background Color"
                isEditable={true}
                placeholder={'Select background color'}
                onChange={(value) => handleChange('bg_color', value)}
            /> 
            <CustomSelect
                value={data.text_color}
                data={sample}
                label="Text Color"
                isEditable={true}
                placeholder={'Select text color'}
                onChange={(value) => handleChange('text_color', value)}
            />  
            <CustomSelect
                value={data.border_color}
                data={sample}
                label="Border Color"
                isEditable={true}
                placeholder={'Select border color'}
                onChange={(value) => handleChange('border_color', value)}
            />  
        </div>
    </div>
  )
}

export default CustomTools