'use client'

import { DefaultSelectType } from "@/constant/types/common"
import { useState } from "react"
import CustomTools from "./custom-tools"
import { Label } from "@/components/shadcn/ui/label"
import CustomWidget from "./custom-widget"
import Branding from "./branding"
import { Separator } from "@/components/shadcn/ui/separator"
import Behaviors from "./PreviewModes"
import PreviewModes from "./PreviewModes"
import EmbeddedCode from "./EmbeddedCode"


const Customization = () => {
    const sampleData: DefaultSelectType[] = [
        { id: 1, name: 'Color 1', value: '#6600CC' },
        { id: 2, name: 'Color 2', value: '#00ff00' },
        { id: 3, name: 'Color 3', value: '#0000ff' },
        { id: 4, name: 'Color 4', value: '#ffff00' },
    ]

    const [formData, setFormData] = useState({
        bg_color: '#ffffff',
        button_color: '#000000',
        text_color: '#000000',
        button_text_color: '#ffffff',
        primary_color: '#6600CC',
        border_color: '#cccccc',
    })
    // Handle input change
    const handleChange = (field: string, value: string) => {
            setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const [selectedPrimary, setSelectedPrimary] = useState('')
    const [currentMode, setCurrentMode] = useState(1)

  return (
    <div>
        <div className='w-full flex  h-full gap-5'>
            <div className=' w-2/12 h-fit'>
               <div className="grid  py-2 gap-3">
                    <div className="grid gap-0">
                        <Label className="text-lg">Branding</Label>
                        <Branding />
                    </div>
                    <Separator />
                    <div className="grid">
                        <CustomTools setSelectedPrimary={setSelectedPrimary} data={formData} handleChange={handleChange} sample={sampleData} />
                    </div>
               </div>

            </div>
            <div className=' w-full rounded-lg flex flex-col gap-3 h-[650px] bg-muted p-4'>
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-xs uppercase font-medium text-muted-foreground">Preview</h2>
                    <PreviewModes mode={setCurrentMode}/>
                </div>
                <div className="border h-full border-dashed rounded-lg flex justify-center items-center shadow-md">
                    {currentMode == 1 ? 
                        <div className="w-[400px]">
                            <CustomWidget primary={selectedPrimary}/>
                        </div>
                        : 
                        <EmbeddedCode />
                    }

                </div>
            </div>
        </div>
    </div>
  )
}

export default Customization