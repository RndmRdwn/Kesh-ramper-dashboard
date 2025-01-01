import { Label } from '@/components/shadcn/ui/label'
import { DefaultSelectType } from '@/lib/common'
import { cryptoCurrencies, fiatCurrencies } from '@/lib/data'
import { ChevronDown, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {
    currentRamp: 'Buy' | 'Sell',
    payAmount: string,
    payCurrency: string,
    getAmount: string,
    getCurrency: string,
    onUpdate: (name: string, value: string) => void

}

const GetComponent = ({ currentRamp, payAmount, getAmount, getCurrency, payCurrency, onUpdate} : Props) => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<DefaultSelectType>()

  const [formData, setFormData] = React.useState({
    payAmount: payAmount,
    payCurrency: payCurrency,
    getAmount: getAmount,
    getCurrency: getCurrency,
  });

  
  useEffect(() => {
    // Update `selectedItem` based on the `currentRamp`
    if (currentRamp === 'Sell') {
      setSelectedItem(fiatCurrencies[0]); // Set the first item from fiatCurrencies
      setFormData((prev) => ({ ...prev, payCurrency: fiatCurrencies[0].value })); // Update formData
    } else if (currentRamp === 'Buy') {
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
                <div className='w-full shadow-sm rounded-xl p-3 border grid gap-2 bg-muted'>
                    <div className='flex justify-between items-start  '>
                        <h3 className='text-sm'>You Get</h3>
                        <div>
                            <div className=' w-24 bg-white border rounded-full p-2 px-2 hover:border-primary cursor-pointer flex justify-between items-center' onClick={() => setOpenModal(!openModal)}>
                                { selectedItem ? (
                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <Image alt={selectedItem.value} src={selectedItem.imgUrl} width={20} height={20} />
                                        </div>
                                        <h2 className='text-sm font-medium first-letter:uppercase'>{selectedItem.name} </h2>
                                    
                                    </div>
                                ) : (
                                    <p className='text-muted-foreground  text-xs'>Select</p>
                                )}
                                    <ChevronDown size={18} />
                            </div>
                        </div>
                        
                    </div>
                    <input placeholder="0.00" disabled
                            value={ formData.getAmount } 
                            onInput={(e) => {
                                const value = e.currentTarget.value;
                                // Allow only numbers and a single decimal point
                                if (/^\d*\.?\d{0,4}$/.test(value)) {
                                    handleChange('getAmount', value);
                                } else {
                                    e.currentTarget.value = formData.getAmount; // Revert to last valid value
                                }
                            }}
                            className="text-[24px] font-medium w-full focus-visible:ring-0 focus-visible:outline-none border-none bg-transparent "
                        />
                    <div className='w-full grid gap-2'>
                        <Label className="font-normal text-muted-foreground w-full text-start text-[11px]">
                            1.00 
                            <span className='uppercase px-1'>
                            {currentRamp == 'Buy' ?
                                <>
                                    {formData.getCurrency || cryptoCurrencies[0].name } 
                                </>
                             : 
                                <>
                                    {payCurrency || fiatCurrencies[0].name } 
                                </>
                            }
                            </span>
                            = 
                            <span className='uppercase pl-1'>
                            0.00
                            </span>
                            <span className='uppercase px-1'>
                            {currentRamp == 'Buy' ?
                                <>
                                    {payCurrency || fiatCurrencies[0].name } 
                                </>
                             : 
                                <>
                                    {formData.getCurrency || cryptoCurrencies[0].name } 
                                </>
                            }
                            </span>
                        </Label>
                    </div>
                </div> 
            </div>
            {/* Overlay */}
            <div  onClick={() => setOpenModal(!openModal)}
              className={`${
                openModal ? 'h-[635px] bg-muted-foreground/60 rounded-xl ' : 'opacity-0'
              } w-full absolute z-0 transition-all duration-300 bottom-0`}>
            </div>

            {/* Modal */}
            <div
              className={`absolute rounded-b-xl rounded-t-2xl h-fit p-3 pb-8 bg-white z-50 backdrop-blur-sm w-full transform ${
                openModal ? 'translate-y-0 ' : 'translate-y-full '
              } transition-transform duration-500 ease-in-out bottom-0`}>

                {/* Children */}

                    <div className='p-2 grid gap-3'>
                        <div className='w-full flex justify-between items-center px-1'>
                            <h2 className='font-medium'>Select {currentRamp == 'Buy' ? 'Currency' : 'Crpyto'}</h2>
                            <div className='rounded-full p-1  hover:bg-primary/5 cursor-pointer' onClick={() => setOpenModal(!openModal)} >
                                <X size={18} />
                            </div>
                        </div>
                        <div className='py-1'>
                            {currentRamp == 'Sell' ? (
                                <div className='grid gap-2'>
                                    {fiatCurrencies.map( item => (
                                        <div key={item.id} onClick={() => handleSelection('getCurrency',item.value, item)} 
                                            className={ `w-full flex items-center gap-3 border border-muted rounded-xl cursor-pointer  hover:bg-primary/10 p-3 bg-muted/50`}>
                                            <div className='flex gap-2 items-center'>
                                                <div>
                                                    <Image alt={item.value} src={item.imgUrl} width={20} height={20} />
                                                </div>
                                                <h2 className='text-sm font-medium first-letter:uppercase'>{item.title} ({item.name}) </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className='grid gap-2'>
                                    {cryptoCurrencies.map( item => (
                                        <div key={item.id} onClick={() => handleSelection('getCurrency',item.value, item)} 
                                            className={ `w-full flex items-center gap-3 border border-muted rounded-xl cursor-pointer  hover:bg-primary/10  p-3 bg-muted/50`}>
                                            <div className='flex gap-2 items-center'>
                                                <div>
                                                    <Image alt={item.value} src={item.imgUrl} width={20} height={20} />
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

export default GetComponent