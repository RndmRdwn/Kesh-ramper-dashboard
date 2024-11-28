'use client'

import CustomTextArea from '@/components/forms/Custom-TextArea'
import CustomTextField from '@/components/forms/custom-textfield'
import { Separator } from '@/components/shadcn/ui/separator'
import React, { useState } from 'react'


const BusinessDetails = () => {

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
<div className='grid gap-4 lg:grid-cols-2 md:grid-cols-2'>
        <div className='lg:col-span-2 md:col-span-2'>
          <h2>Business Details</h2>
          <Separator />
        </div>
        <CustomTextField isEditable={true} label="Business Name"  placeholder='Enter your Business Name'
                  value={formData.name} onChange={(e) => handleChange('name', e.target.value)}/>
        <CustomTextField isEditable={true} label="Type of business"  placeholder='Enter your Business Type'
                  value={formData.type} onChange={(e) => handleChange('type', e.target.value)}/>
        <CustomTextField isEditable={true} label="Business Location"  placeholder='Enter your Business Location'
                  value={formData.location} onChange={(e) => handleChange('location', e.target.value)}/>
        <CustomTextField isEditable={true} label="Industry"  placeholder='Please Select your Industry'
                  value={formData.industry} onChange={(e) => handleChange('industry', e.target.value)}/>
        <CustomTextField isEditable={true} label="Business Webiste"  placeholder='www.example.com'
                  value={formData.website} onChange={(e) => handleChange('website', e.target.value)}/>

        <div className='lg:col-span-2 md:col-span-2'>
          <CustomTextArea isEditable={true} label="Product Description" value={formData.description} 
                  placeholder='Example: I sell shoes and socks. I sell these items through my website and on social media.'
                  onChange={(e) => handleChange('description', e.target.value)}/>
        </div>
</div>
)
}

export default BusinessDetails