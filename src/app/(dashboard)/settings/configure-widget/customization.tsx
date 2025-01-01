'use client'

import { useState } from "react"
import CustomTools from "./custom-tools"
import { Label } from "@/components/shadcn/ui/label"
import Branding from "./branding"
import { Separator } from "@/components/shadcn/ui/separator"
import PreviewModes from "./PreviewModes"
import EmbeddedCode from "./EmbeddedCode"
import { Checkbox } from "@/components/shadcn/ui/checkbox"
import { MonitorDot } from "lucide-react"
import { TbDeviceMobile } from "react-icons/tb";
import { Button } from "@/components/shadcn/ui/button"
import FirstWidget from "@/components/kesh-components/FirstWidget"

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


    const [responsive, setResponsive] = useState(1);


  return (
    <div>
        <div className='w-full flex lg:flex-row flex-col  h-full gap-5'>
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
                        <div className="flex gap-1 items-center ">
                            <Button onClick={() => setResponsive(1)} variant="outline" className={`p-0 px-2 ${responsive == 1 && 'border-r-0 border-b-0 border-primary bg-primary/5'}`}>
                                <TbDeviceMobile 
                                    className={`${responsive == 2 && 'text-primary'}`}
                                    size={20}/>
                            </Button>
                            <Button onClick={() => setResponsive(2)} variant="outline" className={`p-0 px-2 ${responsive == 2 && 'border-l-0 border-t-0 border-primary bg-primary/5'}`}>
                                <MonitorDot  
                                    className={`${responsive == 1 && 'text-primary'}`}
                                    size={20} />
                            </Button>
                        </div>
                        <PreviewModes mode={setCurrentMode}/>
                    </div>
                </div>
                <div className="border h-full border-dashed rounded-lg flex justify-center  items-center shadow-md">
                    {currentMode == 1 ? 
                        <div className={`${responsive == 1 ? 'w-[450px] h-[650px]' : 'w-full flex justify-center items-center p-4 bg-muted'} flex justify-center items-center transition-all duration-500 ease-in-out`}>
                            <div className={`${responsive == 1 ? 'w-fit rounded-xl' : 'w-[450px] rounded-3xl'} shadow-lg ` }>
                                <FirstWidget selectedPrimary={selectedPrimary} />
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