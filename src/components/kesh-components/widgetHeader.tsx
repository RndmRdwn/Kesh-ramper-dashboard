import { ChevronLeft } from 'lucide-react'
import React from 'react'

type Props = {
    step: number,
    ramp: "Buy" | "Sell",
    setRamp: (value: string) => void
    prevStep: () => void
}

const WidgetHeader = ({step, ramp, setRamp, prevStep}: Props) => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='p-4 flex justify-center items-center relative'>
            {step > 1 && step < 6 && (
            <div className=' p-1 rounded-lg  hover:bg-muted cursor-pointer absolute left-0' onClick={prevStep} >
                <ChevronLeft/>
            </div>
            )}
            {(ramp == 'Buy') && (
            <>
                {step == 2 && (
                    <h2 className='font-medium '>Enter USDT Wallet Address</h2>
                )}
                {step == 3 && (
                    <h2 className='font-medium '>ID Proof & Selfie</h2>
                )}
                {step == 4 && (
                    <h2 className='font-medium '>Confirm Your Payment</h2>
                )}
                {step == 5 && (
                    <h2 className='font-medium '>Payment Details</h2>
                )}
                {step == 6 && (
                    <h2 className='font-medium '>Payment Status</h2>
                )}
            </>
            )}
            {(ramp == 'Sell') && (
            <>
                {step > 1 && (
                    <h2 className='font-medium '>Sell Crypto</h2>
                )}
            </>
            )}
            {step < 2 && (
            <h2 className='font-medium text-lg'>{ramp} Crypto</h2>
            )}
        </div>
        {step == 1 && (
              <div className='grid grid-cols-2 gap-1  '>
                <div onClick={() => setRamp('Buy')} 
                  className={`flex items-center justify-center pb-1 border-b-2 ${ramp == 'Buy' ? ' border-[#6600CC]' : 'border-transparent'} cursor-pointer`}>
                  <h2 className='font-medium text-[#6600CC]'>Buy </h2>
                </div>
                <div onClick={() => setRamp('Sell')} 
                  className={`flex items-center justify-center pb-1 border-b-2 ${ramp == 'Sell' ? ' border-[#6600CC]' : 'border-transparent'} cursor-pointer`}>
                  <h2 className='font-medium text-[#6600CC]'>Sell</h2>
                </div>
              </div>
            )}
    </div>
  )
}

export default WidgetHeader