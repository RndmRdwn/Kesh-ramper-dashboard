'use client'

import CustomTextArea from '@/components/forms/Custom-TextArea'
import CustomTextField from '@/components/forms/custom-textfield'
import { Label } from '@/components/shadcn/ui/label'
import { Separator } from '@/components/shadcn/ui/separator'
import { CustomCommand } from '@/components/shared/custom-Command'
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

const industryOptions = [
  {value : 'tech_industry', label : 'Tech Industry'},
  {value : 'finance_industry', label : 'Finance Industry'},
  {value : 'travel_industry', label : 'Travel Industry'},
  {value : 'industry_01', label : 'Industry 01'},
  {value : 'industry_02', label : 'Industry 02'},
  {value : 'industry_03', label : 'Industry 03'},
]
const businessOptions = [
  {value : 'indiviual', label : 'Indiviual'},
  {value : 'organization', label : 'Non-profit Organization'},
  {value : 'company', label : 'Company'},
]

return (
<div className='grid gap-4 lg:grid-cols-2 md:grid-cols-2'>
        <div className='lg:col-span-2 md:col-span-2'>
          <h2>Business Details</h2>
          <Separator />
        </div>
        <CustomTextField isEditable={true} label="Business Name"  placeholder='Enter your Business Name'
                  value={formData.name} onChange={(e) => handleChange('name', e.target.value)}/>
        {/* <CustomTextField isEditable={true} label="Type of business"  placeholder='Enter your Business Type'
                  value={formData.type} onChange={(e) => handleChange('type', e.target.value)}/> */}
        <div className='grid gap-2'>
            <Label>Type of Business</Label>
            <CustomCommand  data={businessOptions} placeholder='a business type' title='Select a Business Type' />
        </div>
        <CustomTextField isEditable={true} label="Business Location"  placeholder='Enter your Business Location'
                  value={formData.location} onChange={(e) => handleChange('location', e.target.value)}/>
        {/* <CustomTextField isEditable={true} label="Industry"  placeholder='Please Select your Industry'
                  value={formData.industry} onChange={(e) => handleChange('industry', e.target.value)}/> */}
        <div className='grid gap-2'>
            <Label>Industry</Label>
            <CustomCommand data={industryOptions} placeholder='an industry' title='Select an industry' />
        </div>
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