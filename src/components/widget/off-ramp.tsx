import React, { useState } from 'react';
import { CustomSelect } from '../shared/CustomSelect';
import { DefaultSelectType } from '@/constant/types/common';
import { Label } from '../shadcn/ui/label';
import { Button } from '../shadcn/ui/button';
import Payment from './On Ramp/payment';
import PhoneNumber from './On Ramp/phoneNumber';
import Procced from './On Ramp/Procced';
import Wallet from './On Ramp/wallet';
import KycProof from './On Ramp/kycProof';

type RampProps = {
  primary : string
}

const OffRamp = ({ primary } : RampProps) => {
  // const currencies: DefaultSelectType[] = [
  //   { id: 1, name: 'KES', value: 'kes' },
  //   { id: 2, name: 'BTC', value: 'btc' },
  //   { id: 3, name: 'USD', value: 'usd' },
  //   { id: 4, name: 'ETH', value: 'eth' },
  //   { id: 5, name: 'SOL', value: 'sol' },
  // ];
  const cryptoCurrencies: DefaultSelectType[] = [
    { id: 1, name: 'USDT', value: 'usdt' },
    { id: 2, name: 'BTC', value: 'btc' },
    { id: 3, name: 'ETH', value: 'eth' },
    { id: 4, name: 'SOL', value: 'sol' },
    { id: 5, name: 'DOT', value: 'dot' },
  ];
  const fiatCurrencies: DefaultSelectType[] = [
    { id: 1, name: 'KES', value: 'kes' },
    { id: 2, name: 'USD', value: 'usd' },
    { id: 3, name: 'EUR', value: 'eur' },
    { id: 4, name: 'ETB', value: 'etb' },
  ];
  const phoneCodes: DefaultSelectType[] = [
    { id: 1, name: '+252', value: 'kes' },
    { id: 2, name: '+254', value: 'btc' },
    { id: 3, name: '+090', value: 'usd' },
    { id: 4, name: '+123', value: 'eth' },
    { id: 5, name: '+000', value: 'sol' },
  ];
  const methods: DefaultSelectType[] = [
    { id: 1, name: 'Payment Method 1', value: 'PM1' },
    { id: 2, name: 'Payment Method 2', value: 'PM2' },
    { id: 3, name: 'Payment Method 3', value: 'PM3' },
    { id: 4, name: 'Bank Transfer', value: 'Bank Transfer' },
    { id: 5, name: 'Mobile Payment', value: 'Mobile Payment' },
  ];
  const mobileMethods: DefaultSelectType[] = [
    { id: 1, name: 'M-Pesa', value: 'MPS' },
    { id: 2, name: 'Airtel Money', value: 'ART' },
    { id: 3, name: 'Equitel Money', value: 'EQT' },
  ];

  const [formData, setFormData] = useState({
    payCurrency: 'kes',
    payAmount: '',
    getCurrency: 'usdt',
    getAmount: '',
    paymentMethod: '',
    paymentMethodType: '',
    phoneCode: '',
    phoneNumber: '',
  });

  const [step, setStep] = useState(1); // Track the current step

  // Handle input change
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="grid gap-3">
      {/* Step 1: Select "You Pay" and "You Get" */}
      {step === 1 && (
        <div className="grid gap-3">
          <div className="w-full border rounded-md p-2 grid gap-2 shadow-sm">
            <div className="flex w-full justify-between items-center">
              <h2 className="text-xs text-muted-foreground">You Pay</h2>
              <CustomSelect
                value={formData.payCurrency}
                data={fiatCurrencies}
                isEditable={true}
                placeholder={fiatCurrencies[0].name}
                onChange={(value) => handleChange('payCurrency', value)}
              />
            </div>
            <div className="w-full">
              <input
                placeholder="0.00"
                value={formData.payAmount}
                onChange={(e) => handleChange('payAmount', e.target.value)}
                className="text-[20px] w-full focus-visible:ring-0 focus-visible:outline-none border-none"
              />
            </div>
          </div>
          <div className="w-full border rounded-md p-2 grid gap-2 shadow-sm">
            <div className="flex w-full justify-between items-center">
              <h2 className="text-xs text-muted-foreground">You Get</h2>
              <CustomSelect
                value={formData.getCurrency}
                data={cryptoCurrencies}
                isEditable={true}
                placeholder={cryptoCurrencies[0].name}
                onChange={(value) => handleChange('getCurrency', value)}
              />
            </div>
            <div className="w-full">
              <input
                placeholder="0.00"
                value={formData.getAmount}
                onChange={(e) => handleChange('getAmount', e.target.value)}
                className="text-[20px] w-full focus-visible:ring-0 focus-visible:outline-none border-none"
              />
            </div>
          </div>
          <Label className="font-light">
            {formData.payAmount || '0'}.00 
            <span className='uppercase px-1'>
              {formData.getCurrency || fiatCurrencies[0].name } 
            </span>
            = 
            <span className='uppercase pl-1'>
              {formData.getAmount || '0'}.00 
            </span>
            <span className='uppercase px-1'>
              {formData.payCurrency || cryptoCurrencies[0].name } 
            </span>
          </Label>
        </div>
      )}

      {/* Step 2: Select Payment Method */}
      {step === 2 && ( 
        <>
         <Payment 
          currentMethodValue ={formData.paymentMethod}
          currentMobileValue ={formData.paymentMethodType}
          methodsData ={methods}
          mobileMethods ={mobileMethods}
          handleChange ={handleChange}
          />
        </>
      )}


      {/* Step 3: Enter Phone Number */}
      {step === 3 && (
        <PhoneNumber 
          currentValue = {formData.phoneNumber}
          currentCodeValue = {formData.phoneCode}
          codeData = {phoneCodes}
          handleChange ={handleChange}
          />
      )}
      
      {step == 4 && (
        <div>
          <Wallet crypto={formData.getCurrency}/>
        </div>
      )}
      {step == 5 && (
        <div>
          <KycProof />
        </div>
      )}
      {step == 6 && (
        <div>
          <Procced 
            payCurrency = {formData.payCurrency}
            payAmount = {formData.payAmount}
            getCurrency = {formData.getCurrency}
            getAmount = {formData.getAmount}
            paymentMethod = {formData.paymentMethod}
            paymentMethodType = {formData.paymentMethodType}
            phoneCode = {formData.phoneCode}
            phoneNumber = {formData.phoneNumber}
          />
        </div>
      )}


      {/* Navigation Buttons */}
      <div className="flex justify-between gap-3">
      {step > 1 && step < 6 && (
        <Button variant='outline' className='w-full' onClick={prevStep} disabled={step === 1}>
          Back
        </Button>
      )}
        {step < 6 ? (
          <Button className={`w-full  `} onClick={nextStep}
             style={{ backgroundColor: primary }}>
            Continue
          </Button>
        ) : (
          <Button className='w-full'>Procced To Buy </Button>
        )}
      </div>
    </div>
  );
};

export default OffRamp;
