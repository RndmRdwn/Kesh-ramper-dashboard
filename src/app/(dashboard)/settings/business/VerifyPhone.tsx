import VerifyPhoneNumber from '@/components/modals/VerifyPhone'
import { Button } from '@/components/shadcn/ui/button'
import React, { useState } from 'react'

type Props = {
    value : string,
    onChange?: (value: string) => void

}

const VerifyPhone = ({value, onChange}: Props) => {
    
    const [startVerify, setStartVerify] = useState(false)

    const handleVerify = () => {
        setStartVerify(!startVerify)
        onChange(value)
    }


  return (
    <div className='flex flex-col gap-1 '>
        <div className='flex flex-col gap-2'>
            <h2 className='font-medium text-sm'>Phone Verification </h2>
            <Button className='w-fit px-8 text-xs' onClick={handleVerify}  variant='outline'>Verify now</Button>
        </div>
        <p className='text-muted-foreground text-xs pr-8'>You must verify your phone number via SMS to process payments from the Dashboard. Your number will not be publicly displayed.</p>

        <VerifyPhoneNumber onClose={() => setStartVerify(!startVerify)} open={startVerify} />
    </div>
  )
}

export default VerifyPhone