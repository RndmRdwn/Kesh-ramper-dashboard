'use client'

import { DefaultSelectType } from "@/constant/types/common"
import { useState } from "react"
import CustomTools from "./custom-tools"
import { Label } from "@/components/shadcn/ui/label"
import CustomWidget from "./custom-widget"
import Branding from "./branding"


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
        <div className='w-full grid grid-cols-7 h-full gap-1'>
            <div className=' col-span-4'>
                    <Label className="text-lg ">Appearance</Label>
               <div className="grid  py-2 gap-3">
                    <div className="grid">
                            <Label className="">Color</Label>
                            <CustomTools data={formData} handleChange={handleChange} sample={sampleData} />
                    </div>
                    <div className="grid gap-0">
                            <Label>Branding</Label>
                            <Branding title="Branding"  />
                            <Label>Branding</Label>
                    </div>
               </div>
               <div className="grid py-2 ">
                    <Label>Behavior Settings </Label>
                    <h2>asdas</h2>
               </div>

            </div>
            <div className='col-span-3'>
                <CustomWidget />
            </div>
        </div>
    </div>
  )
}

export default Customization