import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../shadcn/ui/dialog'
import { Separator } from '../shadcn/ui/separator'
import PhoneNumber from '../widget/On Ramp/phoneNumber'
import { DefaultSelectType } from '@/constant/types/common'
import { Button } from '../shadcn/ui/button'

type Props = {
    open: boolean,
    onClose: (val: boolean) => void,
    selected?: string
}

const VerifyPhoneNumber = ({ open, onClose }: Props) => {

    const [formData, setFormData] = useState({
        phoneNumber : '',
        phoneCode : ''
    })
    // Handle input change
    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
        ...prev,
        [field]: value,
        }));
    };

    
    const phoneCodes: DefaultSelectType[] = [
        { id: 1, name: '+252', value: 'kes' },
        { id: 2, name: '+254', value: 'btc' },
        { id: 3, name: '+090', value: 'usd' },
        { id: 4, name: '+123', value: 'eth' },
        { id: 5, name: '+000', value: 'sol' },
    ];

  return (
    <div>
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-xl p-0">
                <DialogHeader className='px-4 pt-5 pb-2'>
                    <DialogTitle className='font-medium'>Phone verification</DialogTitle>
                </DialogHeader>
                <Separator />
                <div className='px-4 pb-4'>

                    <DialogDescription>
                        Verify your account by phone so you can:
                    </DialogDescription>
                    <ul className='list-disc pl-8'>
                        <li>
                            <DialogDescription>
                            Process payments directly from the Dashboard
                            </DialogDescription>
                        </li>
                        <li>
                            <DialogDescription>
                            Manage customer cards directly from the Dashboard
                            </DialogDescription>
                        </li>
                    </ul>

                    <div className='pt-6 grid gap-4 '>
                        <div className='border border-dashed rounded-md shadow-sm border-primary/20 p-3'>
                            <PhoneNumber 
                                currentValue = {formData.phoneNumber}
                                currentCodeValue = {formData.phoneCode}
                                codeData = {phoneCodes}
                                handleChange ={handleChange}
                            />
                        </div>

                        <Button onClick={() => onClose(true)}>Send Confirmation Code</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default VerifyPhoneNumber