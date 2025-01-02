'use client'

import { useState } from "react"
import CustomTools from "./custom-tools"
import { Label } from "@/components/shadcn/ui/label"
import Branding from "./branding"
import { Separator } from "@/components/shadcn/ui/separator"
import PreviewModes from "./PreviewModes"
import EmbeddedCode from "./EmbeddedCode"
import { Checkbox } from "@/components/shadcn/ui/checkbox"

const Customization = () => {

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
    const [hideFooter, setHideFooter] = useState(true)
    const [currentMode, setCurrentMode] = useState(1)

    const handleCheck = () => {
        setHideFooter(!hideFooter)
    }



  return (
    <div>
        <div className='w-full flex lg:flex-row flex-col   h-full gap-5'>
            <div className=' lg:w-4/12 gap-3 flex flex-col h-fit '>
                <div className='grid gap-1 '>
                    <h3 className="text-lg font-medium">Widget Customization</h3>
                    <p className="text-sm text-muted-foreground">
                      Customize the appearance of the widget. 
                    </p>
                </div>
                <Separator />
                
               <div className="grid  py-2  gap-3">
                    <div className="grid gap-0">
                        <Label className="text-base">Brand Element</Label>
                        <p className="text-xs text-muted-foreground pb-3">
                            Set your default brand elements to determine how Stripe products appear to your customers.
                        </p>
                        <Branding />
                    </div>
                    <Separator />
                    <div className="grid">
                        <CustomTools setSelectedPrimary={setSelectedPrimary} data={formData} handleChange={handleChange}  />
                    </div>

                    <div className="grid gap-3">
                        <h2 className="text-sm text-muted-foreground">Footer</h2>
                        <div className="flex items-center space-x-2">
                        <Checkbox id="footer" onCheckedChange={handleCheck} />
                        <label
                            htmlFor="footer"
                            className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Hide Powered By 
                        </label>
                    </div>
                    </div>
               </div>

            </div>
            <div className=' w-full rounded-lg flex flex-col gap-3 h-full bg-muted/10 p-0'>
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-xs uppercase font-medium text-muted-foreground">Preview</h2>
                    <div className="flex gap-2 items-center">
                        <h1 className="hidden">{selectedPrimary}</h1>
                        <PreviewModes mode={setCurrentMode}/>
                    </div>
                </div>
                <div className="border h-full border-dashed rounded-lg flex justify-center  items-center ">
                    {currentMode == 1 ? 
                        <div className={`w-fit   flex justify-center h-fit items-center transition-all duration-500 ease-in-out`}>
                            <div className={`w-fit rounded-3xl shadow-lg overflow-hidden ` }>
                                {/* <FirstWidget selectedPrimary={selectedPrimary} /> */}
                                <iframe
                                    className="rounded-3xl overflow-hidden w-[365px] lg:w-[385px] "
                                    src="http://localhost:3000/"
                                    height={660}
                                    style={{ overflow: 'hidden', border: 'none' }}
                                    ></iframe>
                            </div>
                            {/* <CustomWidget responsive={responsive} primary={selectedPrimary} footer={hideFooter}/> */}
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