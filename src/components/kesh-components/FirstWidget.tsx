'use client'

import React, { useState } from 'react'
// import { toast } from 'sonner';
import WidgetHeader from './widgetHeader';
import PayComponent from './payComponent';
import GetComponent from './getComponent';
import { Label } from '../shadcn/ui/label';
import { cryptoCurrencies, fiatCurrencies } from '@/lib/data';
import MethodComponent from './methodComponent';
import { Separator } from '../shadcn/ui/separator';
import { Button } from '../shadcn/ui/button';

type FirstWidgetProps = {
  selectedPrimary?: string | '#6600CC'
}

const FirstWidget = ({selectedPrimary} : FirstWidgetProps) => {

    const [selectedRamp, setSelectedRamp] = useState<"Buy" | "Sell">('Buy')
    const [step, setStep] = useState<number>(1);
    // const [isProcessing, setIsProcessing] = useState<boolean>(false);
  

   const [formData, setFormData] = React.useState({
     payAmount: '',
     payCurrency: '',
     getAmount: '',
     getCurrency: '',
     payment_method: '',
     payment_type: '',
     phoneCodeNumber: '',
     phoneNumber: '',
     network: '',
     walletAddress: '',
   });
  
    const handleChange = ( name: string, value: string,) => {
      setFormData({ ...formData, [name]: value });
    };
    
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  
  return (
        <div className='w-full h-full  relative overflow-hidden rounded-3xl bg-white' >
            <WidgetHeader prevStep={prevStep} ramp={selectedRamp} setRamp={(value) => setSelectedRamp(value as "Buy" | "Sell")} step={step}/>

            <div className='w-full h-full py-2  grid gap-2 overflow-hidden'>
              <div className='flex flex-col gap-4 py-1'>
                <PayComponent onUpdate={(name: string, value: string) => handleChange(name, value)} 
                    payAmount={formData.payAmount} payCurrency={formData.payCurrency}
                    currentRamp={selectedRamp as 'Buy' || 'Sell'} />
                <GetComponent onUpdate={(name: string, value: string) => handleChange(name, value)} 
                    payAmount={formData.payAmount} payCurrency={formData.payCurrency} 
                    getAmount={formData.getAmount} getCurrency={formData.getCurrency} 
                    currentRamp={selectedRamp as 'Buy' || 'Sell'} />
                
                <div className='w-full flex px-5 justify-between items-center pb-1'>
                  <h2 className='text-xs text-muted-foreground'>Your Order</h2>
                  <Label className="font-normal w-fit text-start text-muted-foreground text-[11px]">
                      <span className='uppercase font-semibold'>
                          {formData.payAmount ? formData.payAmount : '0.00 '}
                      </span>
                      <span className='uppercase px-1  font-semibold'>
                      {selectedRamp == 'Buy' 
                          ? formData.getCurrency || fiatCurrencies[0].name  
                          : formData.payCurrency || cryptoCurrencies[0].name } 
                      </span>
                      for
                      <span className='uppercase pl-1  font-semibold'>
                      {formData.getAmount ? formData.getAmount : parseInt(formData.payAmount)*0.3 || '0.00'} 
                      </span>
                      <span className='uppercase px-1  font-semibold'>
                      {selectedRamp == 'Buy' 
                          ? formData.payCurrency || cryptoCurrencies[0].name
                          : formData.getCurrency || fiatCurrencies[0].name
                      } 
                      </span>
                  </Label>
                </div>

                <MethodComponent  onUpdate={(name, value) => handleChange(name, value)} 
                    payment_method={formData.payment_method} payment_type={formData.payment_type} 
                    phoneCodeNumber={formData.phoneCodeNumber} phoneNumber={formData.phoneNumber}    
                />

                <div className='grid gap-3 px-4 py-1 '>
                  <Separator />
                  <div className='flex justify-between'>
                      <h2 className='text-xs text-muted-foreground'>Amount to recieve in total</h2>
                      <h2 className='text-xs uppercase font-medium flex gap-1'>
                      {formData.getAmount ? formData.getAmount : parseInt(formData.payAmount)*0.3 || '0.00'}  
                          <span>{formData.getCurrency ? formData.getCurrency : 
                          <>
                            {selectedRamp == 'Buy' ? 'USDT' : 'KES'}
                          </> }</span>
                      </h2>
                  </div>
                </div>

                <div className='w-full flex flex-col gap-2 pt-3 px-4 h-full'>
                  <Button 
                    style={{ backgroundColor: selectedPrimary }}
                    className={`w-full py-6 rounded-xl`}>
                      {selectedRamp == 'Buy' ? 'Buy Now' : 'Sell Now'}
                  </Button>
                </div> 
        
              </div>
            </div>


        </div>
  )
}

export default FirstWidget