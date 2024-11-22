import CustomInput from '@/components/shared/CustomInput'
import React from 'react'

// type Props = {}

const PersonalInfo = () => {
  return (
    <div className='w-full grid lg:grid-cols-5 md:grid-cols-5 gap-3'>
        <div className='w-full col-span-2'>
            <h2 className=' font-medium'>Personal Infomation</h2>
            <h2 className='text-muted-foreground text-sm'>Provide your Personal Info</h2>
            
        </div>
        <div className='w-full col-span-3 grid gap-4 max-w-4xl'>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 w-full'>
                <CustomInput label='First Name'  value='' />
                <CustomInput label='Last Name'  value='' />
            </div>
            <CustomInput label='Phone Number'  value='' />
        </div>
    </div>
  )
}

export default PersonalInfo