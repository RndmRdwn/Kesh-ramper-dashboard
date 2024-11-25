'use client'

import { DefaultSelectType } from "@/constant/types/common"
import { useState } from "react"
import CustomTools from "./custom-tools"
import { Label } from "@/components/shadcn/ui/label"
import CustomWidget from "./custom-widget"


const Customization = () => {
    const sampleData: DefaultSelectType[] = [
        { id: 1, name: 'Color 1', value: '#ff0000' },
        { id: 2, name: 'Color 2', value: '#00ff00' },
        { id: 3, name: 'Color 3', value: '#0000ff' },
        { id: 4, name: 'Color 4', value: '#ffff00' },
    ]

    const [formData, setFormData] = useState({
        bg_color: '#ffffff',
        button_color: '#000000',
        text_color: '#000000',
        button_text_color: '#ffffff',
        focus_outline_color: '#0000ff',
        border_color: '#cccccc',
    })
    // Handle input change
    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
        ...prev,
        [field]: value,
    }))
 }
  return (
    <div>
        <div className='w-full flex lg:flex-row h-full gap-3'>
            <div className='w-[50%] '>
                <Label>Appearance</Label>
               <CustomTools data={formData} handleChange={handleChange} sample={sampleData} />
            </div>
            <div className='w-[50%] '>
                <CustomWidget />
                {/* <div>
                    <div className="w-full border p-4"
                        style={{
                            backgroundColor: formData.bg_color,
                            borderColor: formData.border_color,
                            color: formData.text_color,
                        }}
                    >
                    <h2 style={{ color: formData.text_color }}>Widget Preview</h2>
                    <button
                        style={{
                            backgroundColor: formData.button_color,
                            color: formData.button_text_color,
                            outlineColor: formData.focus_outline_color,
                            outlineWidth: '2px',
                            outlineStyle: 'solid',
                            padding: '10px',
                            border: `1px solid ${formData.border_color}`,
                            borderRadius: '4px',
                        }}
                    >
                        Sample Button
                    </button>
                </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Customization