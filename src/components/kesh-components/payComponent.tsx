
import { DefaultSelectType } from '@/lib/common'
import { cryptoCurrencies, fiatCurrencies } from '@/lib/data'
import { ChevronDown, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {
    currentRamp: 'Buy' | 'Sell'
    onUpdate: (name: string, value: string) => void
    payAmount : string,
    payCurrency : string,
}

const PayComponent = ({ currentRamp, onUpdate, payAmount, payCurrency } : Props) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState<DefaultSelectType>()
    const [isInputActive, setIsInputActive] = useState(false);
    const [formData, setFormData] = React.useState({
        payAmount: payAmount,
        payCurrency: payCurrency,
    });


    useEffect(() => {
        // Update `selectedItem` based on the `currentRamp`
        if (currentRamp === 'Buy') {
        setSelectedItem(fiatCurrencies[0]); // Set the first item from fiatCurrencies
        setFormData((prev) => ({ ...prev, payCurrency: fiatCurrencies[0].value })); // Update formData
        } else if (currentRamp === 'Sell') {
        setSelectedItem(cryptoCurrencies[0]); // Set the first item from cryptoCurrencies
        setFormData((prev) => ({ ...prev, payCurrency: cryptoCurrencies[0].value })); // Update formData
        }
    }, [currentRamp]); // Depend on `currentRamp`
    
    const handleChange = ( name: string, value: string,) => {
        setFormData({ ...formData, [name]: value });
        onUpdate(name, value)
    };

    const handleSelection = (name: string, value: string, item: DefaultSelectType) => {
        handleChange(name, value)
        setSelectedItem(item)
        setOpenModal(!openModal)
    };
  


  return (
    <div>

            {/* Trigger */}

            <div className='px-4'>
                <div className={`w-full shadow-sm rounded-xl p-3 border-2 grid gap-2 ${isInputActive ? 'border-primary ' : ''}`}>
                    <div className="flex justify-between items-start">
                        <h3 className="text-sm">You {currentRamp === 'Buy' ? 'Pay' : 'Sell'}</h3>
                        <div>
                        <div
                            className="w-24 border rounded-full p-2 px-2 hover:border-primary cursor-pointer flex justify-between items-center"
                            onClick={() => setOpenModal(!openModal)}
                        >
                            {selectedItem ? (
                            <div className="flex gap-2 items-center">
                                <div>
                                <Image alt={selectedItem?.value} src={selectedItem?.imgUrl} width={20} height={20} />
                                </div>
                                <h2 className="text-sm font-medium first-letter:uppercase">{selectedItem?.name}</h2>
                            </div>
                            ) : (
                            <p className="text-muted-foreground text-sm">Cur</p>
                            )}
                            <ChevronDown size={18} />
                        </div>
                        </div>
                    </div>
                    <input
                        placeholder="0.00"
                        value={formData.payAmount}
                        onInput={(e) => {
                        const value = e.currentTarget.value;
                        // Allow only numbers and a single decimal point
                        if (/^\d*\.?\d{0,4}$/.test(value)) {
                            handleChange('payAmount', value);
                        } else {
                            e.currentTarget.value = formData.payAmount; // Revert to last valid value
                        }
                        }}
                        onFocus={() => setIsInputActive(true)} // Set active state when focused
                        onBlur={() => setIsInputActive(false)} // Remove active state when blurred
                        className="text-[24px] font-medium w-full focus-visible:ring-0 focus-visible:outline-none border-none"
                    />
                </div>
            </div>

            {/* Overlay */}
            <div  onClick={() => setOpenModal(!openModal)}
              className={` ${
                openModal ? 'h-[635px] bg-muted-foreground/60 rounded-3xl' : 'opacity-0'
              } w-full absolute z-0 transition-all duration-300 bottom-0 `}>
            </div>

            {/* Modal */}
            <div
              className={`absolute rounded-t-2xl rounded-b-xl h-fit p-3 pb-8 bg-white z-50 backdrop-blur-sm w-full transform ${
                openModal ? 'translate-y-0 ' : 'translate-y-full '
              } transition-transform duration-500 ease-in-out bottom-0`}>

                {/* Children */}

                    <div className='p-2 grid gap-3'>
                        <div className='w-full flex justify-between items-center px-1 py-4'>
                            <h2 className='font-medium'>Select Currency</h2>
                            <div className='rounded-full p-1  hover:bg-primary/5 cursor-pointer' onClick={() => setOpenModal(!openModal)} >
                                <X size={18} />
                            </div>
                        </div>
                        <div className='py-2'>
                            {currentRamp == 'Buy' ? (
                                <div className='grid gap-2'>
                                    {fiatCurrencies.map( item => (
                                        <div key={item.id} onClick={() => handleSelection('payCurrency',item.value, item)} 
                                            className={ `w-full flex items-center gap-3 border border-muted rounded-xl cursor-pointer  hover:bg-primary/10  p-3 bg-muted/50`}>
                                            
                                            <div className='flex gap-2 items-center'>
                                                <div>
                                                    <Image alt={item.value} src={item.imgUrl} width={20} height={20} className=''/>
                                                </div>
                                                <h2 className='text-sm font-medium first-letter:uppercase'>{item.title} ({item.name}) </h2>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className='grid gap-2'>
                                    {cryptoCurrencies.map( item => (
                                        <div key={item.id} onClick={() => handleSelection('payCurrency',item.value, item)} 
                                            className={ `w-full flex items-center gap-3 border border-muted rounded-xl cursor-pointer  hover:bg-primary/10  p-3 bg-muted/50`}>
                                            
                                            <div className='flex gap-2 items-center'>
                                                <div>
                                                    <Image alt={item.value} src={item.imgUrl} width={20} height={20} className=''/>
                                                </div>
                                                <h2 className='text-sm font-medium first-letter:uppercase'>{item.title} ({item.name}) </h2>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default PayComponent