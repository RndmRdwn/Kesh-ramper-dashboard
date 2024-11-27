'use client'

import CustomTextArea from '@/components/forms/Custom-TextArea'
import CustomTextField from '@/components/forms/custom-textfield'
import React, { useState } from 'react'

type Props = {
    isEditable: boolean
}

const PersonalDetails = ({isEditable}: Props) => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        industry: '',
        website: '',
        type: '',
        location: '',
    })
       // Handle input change
       const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
        ...prev,
        [field]: value,
        }))
    }
    
  return (
    <div className='grid gap-4'>
            <h2>Business Details</h2>
            <CustomTextField isEditable={isEditable} label="Business Name"  placeholder='Enter your Business Name'
                       value={formData.name} onChange={(e) => handleChange('name', e.target.value)}/>
            <CustomTextField isEditable={isEditable} label="Industry"  placeholder='Please Select your Industry'
                       value={formData.industry} onChange={(e) => handleChange('industry', e.target.value)}/>
            <CustomTextField isEditable={isEditable} label="Business Webiste"  placeholder='www.example.com'
                       value={formData.website} onChange={(e) => handleChange('website', e.target.value)}/>
            <CustomTextArea isEditable={isEditable} label="Product Description" value={formData.description} 
                       placeholder='Example: I sell shoes and socks. I sell these items through my website and on social media.'
                       onChange={(e) => handleChange('description', e.target.value)}/>
    </div>
  )
}

export default PersonalDetails