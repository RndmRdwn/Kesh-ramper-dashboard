import CustomInput from '@/components/shared/CustomInput'
import React from 'react'

// type Props = {}

const CompanyInfo = () => {
  return (
    <div className='w-full grid grid-cols-6 gap-3'>
        <div className='w-full col-span-2'>
            <h2 className=' font-medium'>Company Infomation</h2>
            <h2 className='text-muted-foreground text-sm'>Provide your Company Info</h2>
            
        </div>
        <div className='w-full col-span-3 grid gap-4 max-w-3xl'>
            <CustomInput label='Company Name' value='' />
            <CustomInput label='Your Keshflip Handle' value='www.keshlfip.com/handle' />
            
        </div>
    </div>
  )
}

export default CompanyInfo