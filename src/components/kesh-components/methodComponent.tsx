'use client'

import { Button } from '@/components/shadcn/ui/button'
import { Input } from '@/components/shadcn/ui/input'
import { DefaultSelectType, MethodTypeProps } from '@/lib/common'
import { paymentTypes, phoneCode } from '@/lib/data'
import { ChevronDown, Landmark, Smartphone, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../shadcn/ui/select'


 type Props = {
    onUpdate: (name: string, value: string) => void
    payment_method : string,
    payment_type : string,
    phoneCodeNumber : string,
    phoneNumber : string,
 }

 type CustomSelectProps = {
    data: DefaultSelectType[]
    placeholder: string
    label?: string,
    width?: string | 'w-24',
    value: string,
    isEditable? : boolean
    onChange: (value: string) => void
  }

const MethodComponent = ({onUpdate, payment_method, payment_type, phoneCodeNumber, phoneNumber } : Props) => {
  const [openModal, setOpenModal] = useState(false)
  const [displayValue, setDisplayValue] = useState(false)
  const [selectedItem, setSelectedItem] = useState<MethodTypeProps>()
  const [selectedMethod, setSelectedMethod] = useState('')
  const [selectedMobileMethod, setSelectedMobileMethod] = useState('')
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = React.useState({
    payment_method: payment_method,
    payment_type: payment_type,
    phoneCodeNumber: phoneCodeNumber,
    phoneNumber: phoneNumber,
  });

  const handleChange = ( name: string, value: string,) => {
    setFormData({ ...formData, [name]: value });
    onUpdate(name, value);
  };
    const handleMethodType = (name: string, value: string, item: MethodTypeProps) => {
        handleChange(name, value)
        setSelectedMobileMethod(value)
        setSelectedItem(item)
        handleProcced()

    };
    const handleMethod = (name: string, value: string) => {
        handleChange(name, value)
        setSelectedMethod(value)
        handleProcced()
    };
  
    const handleProcced = ( ) => {
        if(step < 3) nextStep()
        else {
            setOpenModal(!openModal)
            setDisplayValue(true)
        }
    };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div>

            <div className='px-4 grid gap-2'>
                <h3 className=' text-xs font-medium '> Payment Method</h3>

              <div className=' w-full border rounded-lg p-2 py-3 px-4 hover:border-primary cursor-pointer flex justify-between items-center' onClick={() => setOpenModal(!openModal)}>
              {displayValue && selectedItem ? (
                    <div className='flex gap-2 items-center '>
                        <div>
                            <Image alt={selectedItem.value} src={selectedItem.icon} width={15} height={15} />
                        </div>
                        <h2 className='text-sm font-medium first-letter:uppercase'>{selectedItem.value} </h2>
                        {formData.phoneNumber && 
                            (
                                <h2 className='text-sm font-medium first-letter:uppercase text-muted-foreground'>+{formData.phoneCodeNumber} {formData.phoneNumber}</h2>
                            )}
                    </div>
                ) : (
                    <p className='text-muted-foreground  text-sm'>Select payment method</p>
                )}
                    <ChevronDown size={18} />
              </div>
            </div>


            {/* Overlay */}
            <div  onClick={() => setOpenModal(!openModal)}
              className={`${
                openModal ? 'h-[680px] rounded-xl bg-muted-foreground/60 ' : 'opacity-0'
              } w-full absolute z-0 transition-all duration-300 bottom-0`}>
            </div>

            {/* Modal */}
            <div
              className={`absolute rounded-t-2xl rounded-b-xl h-fit p-3 pb-8 bg-white z-50 backdrop-blur-sm w-full transform ${
                openModal ? 'translate-y-0 ' : 'translate-y-full '
              } transition-transform duration-500 ease-in-out bottom-0`}>

                {/* Children */}


              {step == 1 && (
                <div className={`p-2 grid gap-4`}>
                    <div className='w-full flex justify-between items-center'>
                    <h2 className='font-medium'>Payment Method</h2>
                    <div className='rounded-full p-1  hover:bg-primary/5 cursor-pointer' onClick={() => setOpenModal(!openModal)} >
                        <X size={18} />
                    </div>
                    </div>
                    
                    <div className='w-full grid gap-3'>
                        <div onClick={() => handleMethod('payment_method','mobile')} 
                            className={ `w-full flex items-center gap-3 border-2  cursor-pointer  hover:bg-primary/10 rounded-lg p-3 ${selectedMethod == 'mobile' ? 'bg-primary/20 border-primary' : 'bg-muted/50'}`}>
                            <Smartphone />
                            <h2 className='text-sm font-medium'>Mobile Payment</h2>
                        </div>
                        <div onClick={() => handleMethod('payment_method','bank')} 
                            className={`w-full flex items-center gap-3 border-2  cursor-pointer  hover:bg-primary/10 rounded-lg p-3 ${selectedMethod == 'bank' ? 'bg-primary/20 border-primary' : 'bg-muted/50'}`}>
                            <Landmark />
                            <h2 className='text-sm font-medium'>Bank Deposit</h2>
                        </div>
                    </div>
                </div>
              )}
              {(step == 2 && selectedMethod == 'mobile') && (
                <div className='p-2 grid gap-2'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className='font-medium'>Mobile Payment Method</h2>
                        <div className='rounded-full p-1  hover:bg-primary/5 cursor-pointer' onClick={() => setOpenModal(!openModal)} >
                            <X size={18} />
                        </div>
                    </div>

                    {paymentTypes.map(item => (
                        <div key={item.id} className='w-full grid gap-3'>
                            <div onClick={() => handleMethodType('payment_type', item.value, item)} 
                                className={ `w-full flex items-center gap-3 border-2  cursor-pointer  hover:bg-primary/10 rounded-lg p-3 ${selectedMobileMethod == item.value ? 'bg-primary/20 border-primary' : 'bg-muted/50'}`}>
                                <div>
                                    <Image alt={item.value} src={item.icon} width={25} height={25} />
                                </div>
                                <h2 className='text-sm font-medium'>{item.name}</h2>
                            </div>
                        </div>
                    ))} 
                </div>
              )}
              {(step == 3 && selectedMethod == 'mobile') && (
                <div className='p-2 grid gap-4'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className='font-medium'>Mobile Payment Method</h2>
                        <div className='rounded-full p-1  hover:bg-primary/5 cursor-pointer' onClick={() => setOpenModal(!openModal)} >
                            <X size={18} />
                        </div>
                    </div>
                    <div className='grid gap-2  py-1'> 
                        <h3 className=' text-sm font-medium '> {formData.payment_type} Account</h3>
                        <div className='flex gap-2 w-full'>
                            <CustomMethodSelect
                                width='w-40'
                                value={formData.phoneCodeNumber}
                                data={phoneCode}
                                placeholder={'+000'}
                                onChange={(value) => handleChange('phoneCodeNumber', value)}
                            />
                            <Input placeholder='00 000 0000' value={formData.phoneNumber} type='tel'
                                onInput={(e) => {
                                    const value = e.currentTarget.value;
                                    // Remove any non-numeric characters
                                    e.currentTarget.value = value.replace(/\D/g, '');
                                    handleChange('phoneNumber', e.currentTarget.value);
                            }}/>
                        </div>
                    </div> 
                </div>
              )}
              {(step == 2 && selectedMethod == 'bank') && (
                <div className='py-8'>
                    <h2 className='text-center text-muted-foreground text-sm'>Bank Transfer or Card Payment</h2>
                </div>
              )}


            <div className='w-full flex gap-2'>
                {step > 1 && (
                    <Button className='w-full ' variant={'outline'} onClick={prevStep}>Back</Button>
                )}
                {step > 2 && (
                    <Button className='w-full ' onClick={handleProcced}>Procced</Button>
                )}
            </div>
            </div>
    </div>
  )
}


export function CustomMethodSelect({ data, width, placeholder, value, onChange }: CustomSelectProps) {
    return (
      <>
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger className={`${width} text-muted-foreground bg-white`}>
                <SelectValue placeholder={placeholder || "Select"} className="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {data.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <div className="flex gap-2">
                        {item.imgUrl && (
                          <Image src={item.imgUrl} alt={item.name} width={20} height={20} 
                            className="rounded-full "/> )}
                        {item.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
        
      </>
    )
  }

export default MethodComponent