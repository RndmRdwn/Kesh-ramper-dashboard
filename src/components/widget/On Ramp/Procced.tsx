import { Label } from '@/components/shadcn/ui/label'
import React from 'react'

type Props = {
    payCurrency : string,
    payAmount : string,
    getCurrency : string,
    getAmount : string,
    paymentMethod : string,
    paymentMethodType : string,
    phoneCode : string,
    phoneNumber : string,
}

const Procced = ({
    payCurrency,
    payAmount,
    getCurrency,
    getAmount,
    paymentMethod,
    paymentMethodType,
    phoneCode,
    phoneNumber
}: Props) => {
  return (
    <div>
        <h2>Procced</h2>
        <div className='grid  gap-2'>
            <div className='flex justify-between items-center'>
                <h2 className='text-base font-medium text-muted-foreground'>Pay </h2>
                <Label className='uppercase text-base'>{payAmount} {payCurrency}</Label>
            </div>
            <div className='flex justify-between items-center'>
                <h2 className='text-base font-medium text-muted-foreground'>Get  </h2>
                <Label className='uppercase text-base'>{getAmount} {getCurrency}</Label>
            </div>
            <div className='flex justify-between items-center'>
                <h2 className='text-base font-medium text-muted-foreground'>Pay with</h2>
                <Label className='text-base'>{paymentMethod}</Label>
            </div>
            <div className='flex justify-between items-center'>
                <h2 className='text-base font-medium text-muted-foreground'>Using </h2>
                <Label className='text-base'>{paymentMethodType}</Label>
            </div>
            <h2>payCurrency : {payCurrency}</h2>
            <h2>payAmount : {payAmount}</h2>
            <h2>getCurrency : {getCurrency}</h2>
            <h2>getAmount : {getAmount}</h2>
            <h2>paymentMethod : {paymentMethod}</h2>
            <h2>paymentMethodType : {paymentMethodType}</h2>
            <h2>phoneCode : {phoneCode}</h2>
            <h2>phoneNumber : {phoneNumber}</h2> 
        </div>
    </div>
  )
}

export default Procced