import { Label } from '@/components/shadcn/ui/label'
import { CustomCommand } from '@/components/shared/custom-Command'
import CustomInput from '@/components/shared/CustomInput'
import { CustomSelect } from '@/components/shared/CustomSelect'
import React from 'react'
import { SelectCountry, SelectIndustry, SelectLive, SelectVolume } from './SelectionCustom'

// type Props = {}

const CompanyInfo = () => {


  return (
    <div className='w-full grid  lg:grid-cols-2 md:grid-cols-2  gap-6'>
        <div className='grid gap-2'>
            <Label>Industry</Label>
            <SelectIndustry />
            {/* <CustomCommand data={industryOptions} placeholder='an industry' title='Select an industry' /> */}
        </div>
        <div className='grid gap-2'>
            <Label>Country</Label>
            <SelectCountry />
        </div>
        <div className='grid gap-2'>
            <Label>Expected Volume</Label>
            <SelectVolume />
        </div>
        <div className='grid gap-2'>
            <Label>Source of funds</Label>
            <SelectCountry />
        </div>
        <div className='grid gap-2'>
            <Label>Expected to go live</Label>
            <SelectLive />
        </div>
    </div>
  )
}

export default CompanyInfo