'use client'

import CustomTextField from '@/components/forms/custom-textfield'
import { CustomCommandWithIcon } from '@/components/shared/custom-command-icon'
import { countries } from '@/lib/country-data'
import React, { useState } from 'react'
import VerifyPhone from './VerifyPhone'
import { Separator } from '@/components/shadcn/ui/separator'



const PersonalDetails = () => {

    const [formData, setFormData] = useState({
        name: '',
        account_id: '',
        country: '',
        verifyPhone: '',
    })
       // Handle input change
       const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
        ...prev,
        [field]: value,
        }))
    }

    const CountryOptions=countries.map((country)=>({
      value:country.name,
          flag:country.flag,
          label:country.name
  }))
    
  return (
    <>
    <div className='flex flex-col'>
      <h2>Account Details</h2>
      <Separator />
    </div>

      <div className='flex flex-col gap-5 w-full'>
        <CustomTextField isEditable={true} label="Account Name"  placeholder='Your Account Name'
            value={formData.name} onChange={(e) => handleChange('name', e.target.value)}/>
        <CustomTextField isEditable={true} label="Account ID"  placeholder='Your Accounnt ID'
            value={formData.account_id} onChange={(e) => handleChange('account_id', e.target.value)}/>
        <VerifyPhone value={formData.verifyPhone} onChange={(value) => handleChange('verify_phone', value)}/>
        <CustomCommandWithIcon data={CountryOptions}  placeholder='countries'
            onChange={(value) => handleChange('Country', value)}/>
      </div>
    </>
  )
}

export default PersonalDetails